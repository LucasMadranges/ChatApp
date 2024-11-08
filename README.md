# ChatApp

![alt text](.github/img/bg-readme.png)

ChatApp is an real-time application for talk with your friends, add them and many more !

## Summary

- [Stack](#stack)
- [How to config](#how-to-config-the-different-env-files)
- [How to start](#how-to-start-the-project)
    - [AppWeb + Gateway & Services + DB](#appweb--gateway--services--db)
        - [Gateway](#gateway)
        - [AppWeb](#appweb)
    - [App Mobile](#app-mobile)
- [Any problems ?](#any-problem-)

## Stack

(non exhaustive list)

- **App Web** :
    - ![Next.js Badge](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge)
    - ![React Badge](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=for-the-badge)
    - ![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=for-the-badge)
    - ![Apollo GraphQL Badge](https://img.shields.io/badge/Apollo%20GraphQL-311C87?logo=apollographql&logoColor=fff&style=for-the-badge)
        - ![JS Cookie Badge](https://img.shields.io/badge/JS%20Cookie-F7DF1E?logo=cookiecutter&logoColor=000&style=for-the-badge)
        - ![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=for-the-badge)

- **App Mobile** :
    - ![Expo Badge](https://img.shields.io/badge/Expo-000020?logo=expo&logoColor=fff&style=for-the-badge)
    - ![React Native Badge](https://img.shields.io/badge/React%20Native-61DAFB?logo=react&logoColor=000&style=for-the-badge)
        - ![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=for-the-badge)

- **Gateway and microservices** :
    - ![NestJS Badge](https://img.shields.io/badge/NestJS-E0234E?logo=nestjs&logoColor=fff&style=for-the-badge)
    - ![GraphQL Badge](https://img.shields.io/badge/GraphQL-E10098?logo=graphql&logoColor=fff&style=for-the-badge)
    - ![Prisma Badge](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=fff&style=for-the-badge)
    - ![Apollo GraphQL Badge](https://img.shields.io/badge/Apollo%20GraphQL-311C87?logo=apollographql&logoColor=fff&style=for-the-badge)
    - ![JSON Web Tokens Badge](https://img.shields.io/badge/JSON%20Web%20Tokens-000?logo=jsonwebtokens&logoColor=fff&style=for-the-badge)
    - ![Bcrypt Badge](https://img.shields.io/badge/Bcrypt-3B66BC?logo=1password&logoColor=fff&style=for-the-badge)
    - ![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=for-the-badge)

- **Database** :
    - ![PostgreSQL Badge](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=fff&style=for-the-badge)

- **Tools** :
    - ![Docker Badge](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff&style=for-the-badge)

## How to config the different env files

Some of it, change the (ENV) by the env corresponding.

- App/AppWeb/.env.local :

```
NEXT_PUBLIC_GRAPHQL_URL=http://localhost:4000/graphql

AWS_LINK
```

- App/AppMobile/.env :

```Nothing to do```

- Server/Services/.env :

```
DATABASE_URL=postgresql://(POSTGRES_USER):(POSTGRES_PASSWORD)@db-chatapp:5432/(POSTGRES_DB)

NEXTJS_URL=http://localhost:3000

JWT_SECRET

AWS_LINK

PORT_GATEWAY=4000
PORT_USER=4001
PORT_AUTH=4002
PORT_PASSWORD=4003

NODE_ENV=dev
```

- DB/.env :

```
POSTGRES_USER 
POSTGRES_PASSWORD
POSTGRES_DB
```

## How to start the project

### AppWeb + Gateway & Services + DB

To start the entire project, you have to install docker and docker-compose on your computer :

- [Docker](https://www.docker.com/)
- [Docker compose](https://docs.docker.com/compose/)

Then, set your terminal on the root project and write this command :

```docker compose up --build```

Launch it, the project will start quickly and node_modules will be installed. Enjoy!

#### Gateway

Go to [http://localhost:4000](http://localhost:4000) for the gateway. You should see a graphql editor.

#### AppWeb

Go to [http://localhost:3000](http://localhost:3000) for the front. You
should see the application.

### App Mobile

Before launch the app, you have to install a simulator with Xcode (Apple) or Android Studio (Apple, Windows & Linux) on
your computer.
Or, you can install Expo go directly on your phone for testing the mobile app.

Here a link to the documentation of React native to start
with : [Environment setup - React Native](https://reactnative.dev/docs/environment-setup)

When you have finished, open your terminal on the root project and write this command :

```cd App/AppMobile && npm i && npm run start```

You should see something on your terminal with a list of commands with those three :

- › Press a │ open Android
- › Press i │ open iOS simulator
- › Press w │ open web

Press any touch has you want for test the app. Enjoy!

## Any problem ?

Go to the issues section [here](https://github.com/LucasMadranges/ChatApp/issues) and create new issue if you see some
bugs or problem on the project. Thanks!