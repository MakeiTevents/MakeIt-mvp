
/*just for check the balance 
create a function to list all token balances
this only show the eth balance in wei 
*/

const { ethers, utils } = require("ethers");

async function _getBalance(_address) {
    const provider = new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/kVDGpGEVXoUaLMZyMaVZWs_RFz3MhcGI");
    const balanceWei = await provider.getBalance(_address);
    return balanceWei;
  }
// Example usage
const address = "0x14923df4f0aec0ce6469146d3b7d4e7cd47b7cda";
_getBalance(address)
  .then(balance => console.log(`Balance: ${balance} `))
  .catch(error => console.error(error));


// the bleow function is not complet 
// create a function to list all tokens using A





// const { ethers } = require("ethers");
// const axios = require("axios");

// async function getTokenBalancesWithRetries(address, retries = 3, delay = 1000) {
//   for (let attempt = 1; attempt <= retries; attempt++) {
//     try {
//       const balances = await getTokenBalances(address);
//       return balances;
//     } catch (error) {
//       console.error(`Error on attempt ${attempt}:`, error);
//       if (attempt < retries) {
//         console.log(`Retrying in ${delay / 1000} seconds...`);
//         await new Promise(resolve => setTimeout(resolve, delay));
//       }
//     }
//   }
//   throw new Error(`Failed after ${retries} attempts.`);
// }

// // Usage
// getTokenBalancesWithRetries("0x14923df4f0aec0ce6469146d3b7d4e7cd47b7cda")
//   .then(balances => console.log(balances))
//   .catch(error => console.error(error));





// async function getTokenBalances(address) {
//   const provider = new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/kVDGpGEVXoUaLMZyMaVZWs_RFz3MhcGI");

//   // Fetch a token list
//   const tokenListUrl = "https://tokens.coingecko.com/uniswap/all.json";
//   const { data: tokenList } = await axios.get(tokenListUrl);

//   // Iterate through each token and get the balance
//   const balances = await Promise.all(tokenList.tokens.map(async (token) => {
//     const tokenContract = new ethers.Contract(token.address, ["function balanceOf(address) view returns (uint)"], provider);
//     const balance = await tokenContract.balanceOf(address);
//     return {
//       symbol: token.symbol,
//       balance: ethers.utils.formatUnits(balance, token.decimals),
//     };
//   }));

//   return balances;
// }


// getTokenBalancesWithRetries("0x14923df4f0aec0ce6469146d3b7d4e7cd47b7cda")
//   .then(balances => console.log(balances))
//   .catch(error => console.error(error));
// // Example usage
// const address = "0x14923df4f0aec0ce6469146d3b7d4e7cd47b7cda";
// getTokenBalances(address)
//   .then(balances => console.log(balances))
//   .catch(error => console.error(error));
