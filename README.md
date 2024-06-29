This repository contains a demo project showcasing different ways to use server actions in Next.js.

## Prerequisites

- Docker
- Docker Compose

## Getting Started

- Create a `.env` file based on the `.env.example` file

## Running the application

1. Build the docker image

```
npm run docker:build
```

2. Build the application using docker compose

```
npm run docker:dev
```

## Stopping the application

```
npm run docker:down
```

This will run 2 services in docker containers:

- Postgres database
- Next.js application

The **Next.js** application will be available at http://localhost:3000
