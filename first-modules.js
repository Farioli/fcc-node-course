// private
const secret = 'SUPER SECRET';

// public
const john = 'jonh';
const peter = 'peter';

// console.log(module);

// The module is an object, where you exports the variables or the function you want!
module.exports = {john, peter};

// Other way to exports!
// Remember: the exports is just an object! The export is just add properties to that object with values!
module.exports.items = ['item1', 'item2'];

const person = {
    name: 'bob',
}

module.exports.singlePerson = person;