This repository contains a demo project showcasing different ways to use server actions in Next.js.
- **Basic** - Implementation of server actions in a Form element
- **Validate** - **Basic** form + validation using [yup](https://github.com/jquense/yup)
- **State** - **Validate** form + state and error handling using [useFormState](https://react.dev/reference/react/useActionState) react hook

![Screenshot 2024-06-30 at 2 48 50 AM](https://github.com/AnthonyDelaCruz/nextjs-form-actions-playground/assets/32306822/271a366c-1d70-4c29-a0e8-bbbe86db4fcc)

## Pre-requisites

- Docker
- Docker Compose

Refer to [get docker webpage](https://docs.docker.com/get-docker/) to install docker on your machine.

## Getting Started

Create a `.env` file based on the `.env.example` file

Use this repo's version of node

```
nvm use
```

Install dependencies

```
npm install
```

## Running the application

Build the docker images

```
npm run docker:build
```

Start all required services using docker compose

```
npm run docker:dev
```
This will run 2 services in docker containers:

- Postgres database
- Next.js application

The **Next.js** application will be available at http://localhost:3000

## Stopping the application

```
npm run docker:down
```
