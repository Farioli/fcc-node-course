# Node Js Fariolus Guide ```

 D: Node js is an environment to run javascript outside the browser

 Prerequisite:
 - HTLM, CSS, JS
 - ES6 features: Callbacks, Promises, Async-await

## Install Node: Go on the website -> download LTS.
   
    ```sh
    > node --version (Returns the version on the machine)
    ```

There are 2 mode to evaluate code by Node:
- **REPL** : read, evaluate, print loop (Playground) 
    -> by typing "node" in the cmd (Interactive Node Shell, like the browser console)

- **CLI**: Command Line Interface (Executable)
    1. Create a folder "node-apps"
    2. Create a file "app.js"
    
    ```js
        const ammount = 12;
        if(ammount < 10){
            console.log('small number');
        }else{
            console.log('large number');
        }
        console.log("Hey it's my first node app!!!");
    ```
    3. 2 Options to execute the code
        - node app.js (Execute the code)
        TIPS: is not needed to specify the extension (.js)

## Node Globals 

Those are some of the globals variables that node offers out of the box:

- __dirname - path to current directory
- __filename - file name
- require - function to use module(file)
- module - info about current module (file)
- process - info about env where the program is beign executed

## Modules

Although only one fill will be executed (entry point), it is possible to split the application inside various file using modules.

**Common Js** is the library used by Node.
In CommonJs, every file is module by default!
Modules - by definitions are Encapsulated Code (only share minimum).

To export a module, it should be written at the end of the file:
(The module is an object, where you exports the variables or the function you want!)

```js
    module.exports = {john, peter};

    // Or for a single values (or a single function)

    // It's the same as 'export default ...'
    // This is used to export just one module
    module.exports = sayHi;
```

To import a module:
IMPORTANT: for project created module, it should be imported used the ./
```js
    const names = require('./first-modules');
```

// The module is an object, where you exports the variables or the function you want!
module.exports = {john, peter};

***Alternative ways of export***

// Remember: the exports is just an object! The export is just add properties to that object with values!
```js
module.exports.items = ['item1', 'item2'];

const person = {
    name: 'bob',
}

module.exports.singlePerson = person;
```

To import an entire file, it can be done by:

```js
require('./my-file');
```

## Built-in Modules

- **OS**
    For interacting with the operating system (return system data)

    ```js
    // Import of the OS Node Module
    const os = require('os');

    // It is also possible to extract just he feature that we want to use


    // Info about current user
    const user = os.userInfo();

    console.log(user);

    // Method returns the system uptime in seconds
    console.log('The System Uptime is:' + os.uptime() / 3600 + ' hours');

    const currentOS = {
        name: os.type(),
        release: os.release(),
        totalMem: os.totalmem(),
        freeMem: os.freemem(),
    }
    console.log(currentOS);
    ```

- **PATH**

- **FS**
    There are 2 ways to interact with the FileSystem module:
    1. async, non blocking
        ```js
        const { readFile, writeFile } = require('fs');
        ```
    Doesn't block = S C A L A B L E
    
    2. sync, blocking  
        ```js
        const { readFileSync, writeFileSync } = require('fs');
        ```
    The problem with the sync is that if a lot of user uses the a sync function that 
    takes a lot of time => the application get stucks.
    
- **HTTP**

    This module is for setup a http server.
    
    ```js
        const http = require('http');

        // Creates a server
        const server = http.createServer((request, response) => {

            // console.log(request);

            if(request.url === '/'){

                // Shorhand to say write & end
                response.end('Welcome to our home page');
            }

            if(request.url === '/about'){

                response.end('About');
            }

            // Prepare the response
            response.write('<h1>Ooops!</h1><p>We can\'t seem to find the page you are looking for </p> <a href="/">Back Home</a>');
            response.end();
        });

        // Port where the server listen
        server.listen(5000);
    ```
## NPM
Is the package manager for Node. There are all kinds of packages for Node.
Package (dependency or module) = folder with Javascript Code
ACHTUNG: There isn't quality controll on the packages!!!

Npm Commands:

```sh
    # Comes with node
    > npm (global command)
    > npm --version
    # Local Dependencies - Use the module only in the current project
    > npm i <packageName>

    # Global Dependencies
    > (sudo) npm install -g <packageName>
```

*package.json* - is the manifest file that store info about the project / package.
In the package json will be listed all the dependencies.
There are 3 ways to create it:
1. Manualy (create package.json in the root of the project, create properties, etc)
    - package name (The name refers by dfault of the project folder. If the app must be published, must be unique)
2. Automatically: With *npm init* (step by step)
3. Automatically: With *npm -y* (everything default)

*NOTE*: the /node_modules must be gitignored.

*npm install* : install all the dependencies inside the package.json

*npm uninstall packageName* : uninstall a package.

*npx* is an executore of the command without installing the package in the system.

*ncm* : node certified modules - allows to check potential substiute attack on downloaded modules.

*Nodemon*
Nodemon is a Node library to rerun the server on each code change.
It should be installed as development dependency because is not used in production.

To install a package in development: npm i module-name -D or --save-dev.

In the _package.json_ is possible to define scripts.
To start the node application with nodemon, declare the script:

"dev" : nodemon app.js,

To start this script, run: _npm run dev_

Another module: https://github.com/standard/standard

*package.lock* : list all the dependencies of also the dependencies of the module installed.

Links: 
https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm/#:~:text=The%20package.,understanding%20and%20working%20with%20Node.&text=json%20is%20used%20as%20what,streamlined%2C%20modular%2C%20and%20efficient.

*Semantic Versioning*
- https://nodesource.com/blog/semver-a-primer/

- https://semver.org/



# EVENT LOOP, ASYNC PATTERNS, EVENTS EMITTER AND STREAMS

## Event Loop

## Async Patterns

## Event Emitter

# Strams

⌨️ (2:25:56​​) Important Topics Intro
⌨️ (2:27:38​​) Event Loop
⌨️ (2:30:47​​) Event Loop Slides
⌨️ (2:37:46​​) Event Loop Code Examples
⌨️ (2:47:07​​) Async Patterns - Blocking Code
⌨️ (2:54:49​​) Async Patterns - Setup Promises
⌨️ (3:00:35​​) Async Patterns - Refactor To Async
⌨️ (3:06:05​​) Async Patterns - Node's Native Option
⌨️ (3:12:41​​) Events Info
⌨️ (3:14:44​​) Events Emitter - Code Example
⌨️ (3:18:37​​) Events Emitter - Additional Info
⌨️ (3:21:44​​) Events Emitter - Http Module Example
⌨️ (3:25:10​​) Streams Intro
⌨️ (3:26:18​​) Streams - Read File
⌨️ (3:33:01​​) Streams - Additional Info
⌨️ (3:35:05​​) Streams - Http Example
⌨️ (3:40:29​​) End Of Node Tutorial Module

⌨️ (3:40:46​​) HTTP Request/Response Cycle
⌨️ (3:44:49​​) Http Messages
⌨️ (3:55:52​​) Starter Project Install
⌨️ (3:57:59​​) Starter Overview
⌨️ (4:03:25​​) Http Basics
⌨️ (4:15:09​​) Http - Headers
⌨️ (4:24:50​​) Http - Request Object
⌨️ (4:32:00​​) Http - Html File
⌨️ (4:37:20​​) Http - App Example
⌨️ (4:48:02​​) Express Info
⌨️ (4:51:50​​) Express Basics
⌨️ (5:03:05​​) Express - App Example
⌨️ (5:14:31​​) Express - All Static
⌨️ (5:18:13​​) API Vs SSR
⌨️ (5:24:07​​) JSON Basics
⌨️ (5:32:40​​) Params, Query String - Setup
⌨️ (5:39:13​​) Route Params
⌨️ (5:48:25​​) Params - Extra Info
⌨️ (5:50:42​​) Query String
⌨️ (6:07:31​​) Additional Params And Query String Info
⌨️ (6:10:46​​) Middleware - Setup
⌨️ (6:21:27​​) APP.USE
⌨️ (6:28:31​​) Multiple Middleware Functions
⌨️ (6:36:36​​) Additional Middleware Info
⌨️ (6:43:26​​) Methods - GET
⌨️ (6:49:01​​) Methods - POST
⌨️ (6:52:53​​) Methods - POST (Form Example)
⌨️ (7:05:31​​) Methods - POST (Javascript Example)
⌨️ (7:21:22​​) Install Postman
⌨️ (7:30:19​​) Methods - PUT
⌨️ (7:41:43​​) Methods - DELETE
⌨️ (7:50:05​​) Express Router - Setup
⌨️ (8:05:36​) Express Router - Controllers