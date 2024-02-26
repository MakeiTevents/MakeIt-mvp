const { getDefaultProvider, Wallet, ethers } = require("ethers");

async function main(_fromAddress, _toAddress, _ethAmount) {
  const network = "sepolia";
  const provider = getDefaultProvider(network);

  // Check if _ethAmount is a valid string
  if (typeof _ethAmount !== 'string') {
    console.error("Error: Ethereum amount must be a string.");
    process.exit(1);
  }

  try {
    // If you have the private key, uncomment the above lines and use 'wallet' instead of 'provider' below
    const wallet = new Wallet("b34e5b60e3b982986e92d171f58dd8222ed05eeb4bcac1b4154f1ba070b63328", provider);

    const transaction = await wallet.sendTransaction({
      to: _toAddress,
      value: ethers.parseEther(_ethAmount),
    });

    console.log(transaction);
  } catch (error) {
    console.error("Error sending transaction:", error);
  }
}

// Check if the required command-line arguments are provided
if (process.argv.length !== 5) {
  console.error("Usage: node script.js <fromAddress> <toAddress> <ethAmount>");
  process.exit(1);
}

main(process.argv[2], process.argv[3], process.argv[4])
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
