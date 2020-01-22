Squad.io web application.
===

Squad.io is a SaaS solution for project management and task tracking.

Roles:
- Company administrator (operates in web and mobile applications)
- Company member (operates in web and mobile applications)
- Administrator (operates in admin panel)

Staging pshase <http://squad.magora.work>  
API <http://squad.api.magora.work/swagger>

#### Used technologies
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux-saga](https://redux-saga.js.org/)
- [SASS](https://sass-lang.com/)
- [Babel](https://github.com/babel/babel)
- [Webpack 4.x](https://github.com/webpack/webpack)
- [SignalR](https://docs.microsoft.com/ru-ru/aspnet/signalr/)
- [Docker 18.09.x](https://www.docker.com/)
- [Docker Compose 3.x](https://docs.docker.com/compose/)
- [Nginx](https://nginx.org/)

#### Coding style
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/docs/en/)
- [Husky](https://github.com/typicode/husky)

#### Required dependencies
- [Node.js](https://nodejs.org/) v.12.13.0+
- [Cloned repository](https://bitbucket.org/mgrsys/squad.io-js-front/src/staging/)
- Docker & Docker Compose 
to run a containerized application.


Usage
---
#### Environment settings
Settings are included in special files, that start with the project.  
```bash
// ./bin/env.js
const dotenvDir = path.join(__dirname, `../.env.${process.env.NODE_ENV}`);
```
These settings can also be overridden through environment variables.

#### Install packages
`npm install`

#### Run project for development
`npm run dev`

#### Create production build
`npm run build`  


#### Code style check
`npm run lint` - to check JavaScript files.

`npm run lint:style` - to check style files.

`npm run prettier` - to check your coding style.

#### Run a containerized application
`docker-compose up -d` - to start app.  

`docker-compose up -d --build` - to build and start app.
