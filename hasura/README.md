This is graphQL server that handle postgre databases

## Getting start

First, Download the latest Hasura CLI from [here](https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli/#install-hasura-cli).

Update migrations files and apply it

```
hasura migrate apply
```

## Reset metadata and migration

```
hasura metadata apply
hasura migrate apply --database-name=xxx
hasura metadata reload
```

## Learn more

- [Hasura Document](https://hasura.io/docs/latest/index/)
