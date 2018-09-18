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

## How to play
The list of words is limited but you can try to enter this sequence : 4263 which will return "hand" and "game"

## Further improvements
- add a loading spinner
- integrate RxJs in order to handle async operation in a better and flexible way
- add more unit tests
- add a database support with mongogb
- add authentication if needed
- add error handling and feedbacks for missing words
- add less or sass support
