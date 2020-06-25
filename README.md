## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Lints and fixes files

```
yarn lint
```

# git-rebase

Check the history with

```
git log --graph
```

Find the 'good' commit, the one called bacon ipsum.

In order to run the git bisect with hot reload, first start the server:

```
yarn serve
```

To start git bisect, do the following in a new terminal:

```
git bisect start BAD_COMMIT GOOD_COMMIT
```

You can use HEAD for the BAD_COMMIT as that one is broken, the bacon ipsum can be used for GOOD_COMMIT.

## Manual checking

Check your localhost after each step that git bisect takes.
If the styling is broken, mark the revision with:

```
git bisect bad
```

Otherwise:

```
git bisect good
```

## Automated checking

You can replace the manual localhost check by using the unit test scenario.

```
git bisect run yarn test:unit
```

It will now mark the steps based on the unit test!

## Results

Once it finds the first bad commit, stop with:

```
git bisect reset
```

Checkout the bad commmit or diff it to see what happened.

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
