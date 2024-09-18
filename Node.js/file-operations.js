// file-operations.js
const fs = require('fs');

// Write to a file
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File "welcome.txt" created with content "Hello Node".');
});

// Read data from hello.txt (ensure hello.txt exists)
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading hello.txt:', err);
    return;
  }
  console.log('Content of hello.txt:', data);
});
