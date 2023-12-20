const WMATIC = artifacts.require("WMATIC");
const WBNB = artifacts.require("WBNB");
const WETH = artifacts.require("WETH");
const LINK = artifacts.require("LINK");
const TRX = artifacts.require("TRX");
const KLAY = artifacts.require("KLAY");
const USDT = artifacts.require("USDT");

module.exports = async function (deployer) {
  await deployer.deploy(WMATIC);
  const WMATICDeployed = await WMATIC.deployed();

  await deployer.deploy(WBNB);
  const WBNBDeployed = await WBNB.deployed();

  await deployer.deploy(WETH);
  const WETHDeployed = await WETH.deployed();

  await deployer.deploy(LINK);
  const LINKDeployed = await LINK.deployed();

  await deployer.deploy(TRX);
  const TRXDeployed = await TRX.deployed();

  await deployer.deploy(KLAY);
  const KLAYDeployed = await KLAY.deployed();

  await deployer.deploy(USDT);
  const USDTDeployed = await USDT.deployed();
};