const { k }  = require("./5.js");
let l = k;

let arh = [];
for (let x = 0; x < l["nfts"].length; x++){
console.log(l["nfts"][x]["identifier"]);
let f = ('"'+l["nfts"][x].identifier +'"');
arh.push(f);
}

console.log(arh);
console.log("nft in wallet: " + arh.length);
