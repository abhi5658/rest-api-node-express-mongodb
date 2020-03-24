# rest-api-node-express-mongodb

## Contents of [process.md](process.md) below:

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
- new command to start server with nodemon : `npm run start-watch`
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
    - Changing app name and url at heroku: https://devcenter.heroku.com/articles/renaming-apps#updating-git-remotes
    - Goto project directory with heroku logged in
    - rename command syntax:`heroku apps:rename newname --app oldname` : `heroku apps:rename rest-api-node-abhi --app polar-ravine-43913`
    - Update git remotes : 
        - 1st command : `git remote rm heroku`
        - 2nd command : `heroku git:remote -a newname`

### package.json versioning
- example -> "express": "^4.17.1"
- Given a version number MAJOR.MINOR.PATCH, increment the MAJOR version when you make incompatible API changes, MINOR version when you add functionality in a backwards-compatible manner, and PATCH version when you make backwards-compatible bug fixes.
- npm uses the tilde (~) and caret (^) to designate which patch and minor versions to use respectively.
- So if you see ~1.0.2 it means to install version 1.0.2 or the latest patch version such as 1.0.4.
- If you see ^1.0.2 it means to install version 1.0.2 or the latest minor or patch version such as 1.1.0.
- Patch releases: 1.0 or 1.0.x or ~1.0.4
- Minor releases: 1 or 1.x or ^1.0.4
- Major releases: * or x

### Older way of creating routes
- [http module for Node.js server](https://blog.risingstack.com/your-first-node-js-http-server/#thehttpmoduleforyournodejsserver)