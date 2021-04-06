const path = require('path');

// Separator property of the platform
// In windows "\", in linux "/"
console.log(path.sep);

// Returns the normalized path
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

// Absolute path of 
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);