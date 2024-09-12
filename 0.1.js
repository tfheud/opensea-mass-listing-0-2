const { Web3 } = require('web3');
const { ethers, utils, BigNumber, Wallet } = require("ethers"); // module used for intracting with Ethereum Network and signing transact>
const { OpenSeaPort, Chain, OpenSeaSDK, OpenSeaAPI } = require("opensea-js"); // opensea api module
const { Seaport } = require("@opensea/seaport-js");
const { generateRandomSalt } = require("@opensea/seaport-js/lib/utils/order");
require('dotenv').config()
const { TokenStandard } = require('opensea-js');

const web3 = new Web3(process.env.RPC);
const { k }  = require("./5.js");
const prkey = process.env.PRIVATKEY;
const account = web3.eth.accounts.privateKeyToAccount(prkey);
const accountAddress = account.address;

const { JsonRpcProvider, FetchRequest } = require('ethers');
const { HttpsProxyAgent } = require('https-proxy-agent');

const fetchReq = new FetchRequest(process.env.RPC); 

fetchReq.getUrlFunc = FetchRequest.createGetUrlFunc({ agent: new HttpsProxyAgent(process.env.PROXY)}); 

const provider = new JsonRpcProvider(fetchReq);

const walletWithProvider = new ethers.Wallet(prkey, provider);

const openseaSDK = new OpenSeaSDK(walletWithProvider, {
  chain: Chain.CHAIN,        //change CHAIN
  apiKey: process.env.API,
});

let nodePath = process.argv[0];
let appPath = process.argv[1];
let price = process.argv[2];
let total = process.argv[3];
let start = process.argv[4];
let finish = process.argv[5];

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function list1(nam){

console.log("listing " + nam);
let sleep1 = await timeout(200);
const asset = await {
  
  tokenAddress: process.env.CONTRACT,
  tokenId: nam,
  tokenStandard: TokenStandard.ERC721,
};

const expirationTime = await Math.round(Date.now() / 1000 + 60 * 60 * 24);
let sleep2 = await timeout(200);
const listing = await openseaSDK.createListing({
  asset,
  accountAddress,
  startAmount: price,
  expirationTime,
});
let kl = await console.log("nft listed");
}

let arh = [];
for(let i = 0; i<total; i++){
let f = (k["nfts"][i].identifier);
arh.push(f);
}

var m = start;
console.log(arh);
console.log("nft in arh " + arh.length);

async function main(){
for(m; m<finish; m++){
await timeout(1300);
console.log(arh[m]);
list1(arh[m]);
} }

try {

main();

}

 catch (error){
console.error(error);
}
