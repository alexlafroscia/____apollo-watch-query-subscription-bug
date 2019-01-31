# test-apollo-bug

`watchQuery` does not always fire when using `cache.writeQuery` to update the state of a `watchQuery`.

I was able to create a reproduction where the observable does not fire consistently. From my experience, it usually goes something like:

1. Perform a `writeQuery` where nothing happens
2. Perform a `writeQuery` where nothing happens
3. Perform a `writeQuery` that emits the original state, plus the first two objects pushed into the store, but not the one that was _just_ created

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

## The setup under-the-hood

- We use `ember-apollo-client` to provide the Apollo experience in our application. However, we bipass the library when using `watchQuery`, `readQuery` and `writeQuery` and instead do directly to the underlying Apollo client instance
- Pretender intercepts the requests locally
- `graphql-tools` allows us to mock a valid response to the requests
