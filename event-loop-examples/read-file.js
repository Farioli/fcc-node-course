const { readFile } = require('fs');

console.log('started a first task');

readFile('./content/first.txt', 'utf-8', (err, result) => {

    if(err){
        console.log(err);
        return;
    }

    console.log(result);
    console.log('completed first task');
});
console.log('starting next task');

// Started a first task
// Starting Nex Task
// Completed first task

// This because the read is async and offloads to the OS.