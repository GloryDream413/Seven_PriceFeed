const klayPriceFeed = artifacts.require("klayPriceFeed");
const trxPriceFeed = artifacts.require("trxPriceFeed");
const wbnbPriceFeed = artifacts.require("wbnbPriceFeed");
const wmaticPriceFeed = artifacts.require("wmaticPriceFeed");

module.exports = async function (deployer) {
  await deployer.deploy(klayPriceFeed);
  const klayDeployed = await klayPriceFeed.deployed();

  await deployer.deploy(trxPriceFeed);
  const trxDeployed = await trxPriceFeed.deployed();

  await deployer.deploy(wbnbPriceFeed);
  const wbnbDeployed = await wbnbPriceFeed.deployed();

  await deployer.deploy(wmaticPriceFeed);
  const wmaticbDeployed = await wmaticPriceFeed.deployed();
};