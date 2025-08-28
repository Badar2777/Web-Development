const fs = require('fs');

let text = fs.readFileSync('ie.txt')
console.log(text)

let file = fs.writeFileSync("2nd.txt", 'Hello this is another file')
console.log(file)