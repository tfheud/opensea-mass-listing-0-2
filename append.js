const fs = require('fs');
 
let k = fs.readFileSync("6.js", "utf8");
setTimeout(() => {
  console.log("th");
}, 5000);
fs.appendFile("5.js", "let k = ", (err) => {
    if (err) {
        console.log(err);
    }
    else {
        
        console.log("\nFile Contents");
    }
});
setTimeout(() => {
  console.log("thi");
}, 5000);
fs.appendFile("5.js", k, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        
        console.log("\nFile Contents");
    }
});

fs.appendFile("5.js", "\nmodule.exports = { k }", (err) => {
    if (err) {
        console.log(err);
    }
    else {
        
        console.log("\nFile");
    }
});
