[<img src="https://cdn.anychart.com/images/logo-transparent-segoe.png?2" width="234px" alt="AnyChart - Robust JavaScript/HTML5 Chart library for any project">](https://anychart.com)
NodeJS basic template
=========================

This example shows how to run Anychart library with NodeJS using Express, Jade and MongoDB.

### Running
To use this sample you must have:

MongoDB installed and running, if not please checkout https://docs.mongodb.com/manual/installation/
To check your MongoDB installation, run following command in command line:
```
$ mongod -version
db version v3.0.12 # sample output
```
To check MongoDB status type:
```
$ service mongod status
mongod start/running, process 9559 # sample output
```

npm package manager, if not please checkout https://www.npmjs.com/
To check your npm installation, run following command in command line:
```
$ npm -v
1.3.10 # sample output
```
To start this example run commands listed below.

Clone the repository from github.com to your workspace folder:

```
$ git clone git@github.com:anychart-integrations/nodejs-express-mongodb-template.git
```

Navigate to the repository folder:
```
$ cd nodejs-express-mongodb-template
```

Install dependencies
```
npm install
```

Set up MongoDB:
```
$ mongo < database_backup.js
```

Start application:
```
$ npm start
```

open browser at http://localhost:3000/


## Workspace
Your workspace should look like:
```
jnodejs-express-mongodb-template/
    bin/
        www         # script for starting app
    models/
        Fruit.js    # data model
    public/
        images/
        javascripts/
        stylesheets/
            style.css   # css styles
    routes/
        index.js    # main route
    views/
        error.jade  # template for errors
        index.jade  # template for main content
        layout.jade # template for base layout
    app.js      # main js file
    database_backup.js  # backup for MongoDB
    package.json    # project settings
    README.md
    .gitignore
```

## Technologies
Platform/Language - [NodeJS](https://nodejs.org/en/)<br />
Database - [MongoDB](https://www.mongodb.com/)<br />
Web framework - [Express](http://expressjs.com/)<br />
Build tool - [npm](https://www.npmjs.com/)<br />
Template - [Jade](https://naltatis.github.io/jade-syntax-docs/)<br />

## Further Learning
* [Documentation](https://docs.anychart.com)
* [JavaScript API Reference](https://api.anychart.com)
* [Code Playground](https://playground.anychart.com)
* [Technical Support](https://anychart.com/support)

## License
[© AnyChart.com - JavaScript charts](http://www.anychart.com). Released under the [Apache 2.0 License](https://github.com/anychart-integrations/nodejs-express-mongodb-template/blob/master/LICENSE).
