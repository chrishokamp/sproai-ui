_Installing the dev environment_

# python dependencies
- flask
- flask-cors

> $ cd sproai-ui/microservices/api_mock

> $ python web.py

will start the mock api.

# JS dependencies

- npm
- bower (installed with npm)
- gulp (installed with npm)

I think you have to run
> $ npm inatall

> $ bower install

> $ gulp serve

(I dont seem to be able to npm install I think I just downloaded a zip of the npm dependencies?)
gulp serve should start a server and open browser tab and reload when the files change.

> $ gulp build

this should build so it can be deployed to a server and work with a normal http server (apache or nginx or what not)
It creates /dist.

# Changing from mock api

sproai-ui/src/app/components/quizService/quizService.js

> var apiHost = 'http://localhost:7777';

Change this so it points to the real service.
We make 2 calls

```
GET /questions&userName=[userName]

PUT /questions

```
