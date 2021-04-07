// To import a module
// IMPORTANT: for project created module, it should be imported used the ./
const names = require('./first-modules');

const sayHi = require('./utils');

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

// require('./builtin-modules/fs-module');


