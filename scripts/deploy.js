const hre = require("hardhat");
const { deploy_core } = require('./networks/core')
const { setNetwork } = require("../shared/syncParams")

async function main() {
  const accounts = await hre.ethers.getSigners()
  const provider = hre.ethers.provider

  for (const account of accounts) {
    console.log(
      "%s (%i GoerliETH)",
      account.address,
      hre.ethers.utils.formatEther(
        // getBalance returns wei amount, format to ETH amount
        await provider.getBalance(account.address)
      )
    );
  }

  setNetwork(hre.network.name)

  if (hre.network.name === "hardhat" || hre.network.name === "localhost") {
    await deploy_localhost()
  } else if (hre.network.name === "core") {
    await deploy_core()
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
