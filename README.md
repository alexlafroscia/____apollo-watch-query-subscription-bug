# test-apollo-bug

`watchQuery` does not always fire when using `cache.writeQuery` to update the state of a `watchQuery`.

I was able to create a reproduction where the observable does not fire consistently. From my experience, it usually goes something like:

1. Perform a `writeQuery` where the `watchQuery` does not update
2. Perform a `writeQuery` where the state from before the `writeQuery` is emitted from the `watchQuery`

Essentially, we lose the first event.

## Show me the code!

This is an Ember.js application, because that's what my real application that has this bug is. The relevant code has nothing to do with Ember, it's just the easiest way for me to build a full-blown application that also showcases the problem.

All of the relevant code to reproduce the bug can be found in `app/controller/application.js`. There are only two functions in that file that are necessary to understand: `fetchModel` and `createPost`.

`fetchModel` uses the Apollo Client to perform a `watchQuery`. That observable will be monitored and the last event from it rendered into the page. That code can be found [here](https://github.com/alexlafroscia/____apollo-watch-query-subscription-bug/blob/master/app/controllers/application.js#L49-L62).

`createPost` creates a new object through a Mutation, reads the cache from the query that was performed in `fetchModel`, merges the new post in with the existing ones, and writes it back to the cache using `writeQuery`. This often does not update the `watchQuery` the way that I would expect. That code can be found [here](https://github.com/alexlafroscia/____apollo-watch-query-subscription-bug/blob/master/app/controllers/application.js#L66-L87)

## Reproducing the bug

Run the following to install the application locally

```bash
yarn install
yarn start
```

You'll be presented with a page that presents

- A list of posts from `watchQuery`
- A list of posts created locally (the list is added to, manually, from each new post)
- A button to create a post

Creating a post does the following:

- Runs a mutation
- Performs `readQuery` to get the state of the `watchQuery` performed earlier
- Updates the state of the cached data
- Performs `writeQuery` to update the state of the `watchQuery`

## A work-around

Calling `queryManager.broadcastQueries()` manually an additional time solves the problem (likely because whatever is going on under the hood that creates this off-by-one behavior is offset by broadcasting the new state an additional time).

This can be simulated in the demonstration by checking the the checkbox below the `Create New Post` button.

## The setup under-the-hood

- We use `ember-apollo-client` to provide the Apollo experience in our application. However, we bipass the library when using `watchQuery`, `readQuery` and `writeQuery` and instead do directly to the underlying Apollo client instance
- Pretender intercepts the requests locally
- `graphql-tools` allows us to mock a valid response to the requests
