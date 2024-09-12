const fs = require('fs');
const { Readable } = require('stream');
const { finished } = require('stream/promises');
require('dotenv').config()

const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'x-api-key': `${process.env.API}`}
};
var d;
async function klk(){
const stream = fs.createWriteStream('6.js');
let { body} = await fetch(`https://api.opensea.io/api/v2/chain/${process.env.CHAIN}/account/${process.env.WALLET}/nfts?collection=${process.env.CONTRACT_NAME}&limit=200`, options);
await finished(Readable.fromWeb(body).pipe(stream));

}

klk();
