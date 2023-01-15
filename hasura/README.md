This is graphQL server that handle postgre databases

## Getting start

First, Download the latest Hasura CLI from [here](https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli/#install-hasura-cli).

Update migrations files and apply it

```
hasura migrate apply
```

## Apply metadata and migration

```
hasura migrate apply --database-name=default
hasura metadata apply
```

## Seed intial data

```
hasura seed apply --file 1672581457_initialSeed.sql --database-name=default
```

## Rollback initial migration version

```
hasura migrate apply --version 1672581457 --type down --database-name=default
```

## Reset database

- down migration version to the inital version
- apply migration
- apply metadata
- seed data

```
  hasura migrate apply --version 1672581457 --type down --database-name=default
  hasura migrate apply --database-name=default
  hasura metadata apply
  hasura seed apply --file 1672581457_initialSeed.sql --database-name=default
```

## Learn more

- [Hasura Document](https://hasura.io/docs/latest/index/)
