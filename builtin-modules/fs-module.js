// Destructure the module
// Same as
// const fs = require('fs');
// fs.readFileSync
const { readFileSync, writeFileSync } = require('fs');

// Read a file
const first = readFileSync('./content/first.txt', 'utf-8');

const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

// If the file is not created yet, Node first creates the file.
// If the file exists, Node overwrite the values

// Using the flag 'a' it is possible to append!
// writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second} `, { flag: 'a'});

// ASYNC WAY
// Requires callbacks to be called after the operation finishes.
const { readFile, writeFile } = require('fs');

// Specifyng the type of text, the result will be parsed from the buffer!

// CALLBACK HELL - Will be fixed with async/await or Promises
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if(err){
        console.error(err);
        return;
    }

    console.log(result);
    const first = result;

    readFile('./content/second.txt', 'utf-8', (err, result) => {

        if(err){
            console.error(err);
            return;
        }
    
        console.log(result);
        const second = result;

        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second} `, { flag: 'a'}, (err, result) => {

            if(err){
                console.error(err);
                return;
            }

            console.log(result);
        });
    });
});