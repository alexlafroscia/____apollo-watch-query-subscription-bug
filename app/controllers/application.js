/* eslint-disable require-yield */

import Controller from "@ember/controller";
import { inject as service } from "@ember-decorators/service";
import { task, lastValue } from "ember-concurrency-decorators";
import { Subject, empty } from "rxjs";
import { map } from "rxjs/operators";
import { subscribe } from "ember-rx";
import gql from "graphql-tag";

function toRxSubject(observable) {
  const subject = new Subject();
  observable.subscribe(subject);

  return subject;
}

const allPosts = gql`
  query FetchAllPosts {
    allPosts {
      id
      content
    }
  }
`;

const createPost = gql`
  mutation CreatePost($content: String!) {
    post: createPost(content: $content) {
      id
      content
    }
  }
`;

export default class ApplicationController extends Controller {
  @service apollo;

  @lastValue("fetchModel")
  model$ = empty();

  @subscribe("model$")
  model = [];

  createdPosts = [];

  @task
  fetchModel = function*() {
    const apolloObservable = this.apollo.client.watchQuery({
      query: allPosts
    });

    const subject = toRxSubject(apolloObservable);

    // Log states as they are emitted from the observable
    subject.subscribe(value => {
      console.log(value); // eslint-disable-line
    });

    return subject.asObservable().pipe(map(value => value.data.allPosts));
  };

  @task
  createPost = function*() {
    const result = yield this.apollo.mutate(
      {
        mutation: createPost,
        variables: {
          content: "A new post"
        }
      },
      "post"
    );

    this.set("createdPosts", [...this.createdPosts, result]);

    const data = this.apollo.cache.readQuery({
      query: allPosts
    });

    data.allPosts = [...data.allPosts, result];

    this.apollo.cache.writeQuery({
      query: allPosts,
      data
    });
  };
}
