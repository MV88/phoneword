# phoneword demo
A React phoneword application

## Server
For the server you need to be sure to having all installed by inserting
`npm install`

be sure to have installed globally *nodemon*
`npm install -g nodemon`

in order to start the server return
`npm start`

Note: Server runs at `http://localhost:5000`

It implements a web service at `http://localhost:8080/words/:number` where number is the combination of letters inserted by the user

## Client

The client is a simple React app with some basic setup

Install all dependencies:
`npm install`

In order to start the application run:
`npm start`

browse to `http://localhost:8080`

## Further improvements
- adding a loading spinner
- integrate RxJs for better managing async operation
- adding more unit tests
- adding a database support with mongogb
- add authentication if needed
- a better error handling
- using less or sass for better css management
