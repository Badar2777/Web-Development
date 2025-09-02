const fs = require('fs');

let text = fs.readFile(("ie.txt", 'UTF-8'), (err, data)=>{
  console.log(data)
})
console.log("Hello again")


// sync or blocking
// async or blocking

