# Fullstack Test

## Local setup

### Client

**Under `client` path**

1. Install dependencies: `yarn`
2. Run locally: `yarn start`

And client will start at port `3000`

### Database

**Under `server` path**

1. Run locally: `docker-compose up`

And database will start at port `5432`

### Server

**Under `server` path**

1. Install dependencies: `yarn`
2. set local environment variables: copy `.env.example` and paste, rename it `.env`
3. Run locally: `yarn start`

And server will start at port `8000`

### Init database

**Under `server` path**

To make the app functional, we need to init the database, creating the tables we need.

```
yarn migrate
```