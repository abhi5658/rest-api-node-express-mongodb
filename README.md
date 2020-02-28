# rest-api-node-express-mongodb

## Contents of [process.md](process.md)

### Steps:
- create project folder
- `npm init -y`
- create index.js; add dummy code
- `node src/index.js`
- add "start": "node src/index.js" in scripts in package.json
- `npm start` OR `npm run start`
- `npm install express`
- use express, listen : check
- create route : check
- install nodemon : `npm i nodemon -D`
    - -D to install(download) and run nodemon only during development
- add "start-watch": "nodemon src/index.js" in scripts in package.json
- install mongoose : `npm i mongoose`
- install body parser: `npm i body-parser`
- install now.sh CLI globally(system wide) : `npm i now -g` [not using now.sh as it works good for serverless function]
- process.env.PORT added & addd PORT number in start in package.json

### Setting up mongodb
- Sign up on mongodb.com
- New project auto-created on new cluster creation
- Create a new Cluster
- Select provider [preferably aws]
- Select nearest region [Mumbai (ap-south-1)]
- Enter cluster name
- Create Cluster
- Create user in Database Access tab
- Add IP address in Network Access tab [whitelist for all if needed]
- After cluster build success click connect
- Get connection string
- Edit user and password in connection string

### Setting up Heroku app against node project
- create heroku account
- install heroku CLI
- goto local project git directory
- login into heroku cli : `heroku login`
- enter credentials -> login success
- try running project locally as heroku project: `heroku local web`
- heroku starts server on port 5000! the code has been designed to accept port from external environment
- create heroku project: `heroku create` : this creates a git project assosiated to heroku
- push commited project to heroku master branch : `git push heroku master` : makes the project live at returned url
- created **secret** branch based on master: `git checkout -b secret master`
- staging credential file back to secret branch : `git update-index --no-skip-worktree src/models/db_credential.js`
- commit changes in secret branch
- push secret branch to heroku master to have correct credentials to mongodb : `git push heroku secret:master` : db works correctly