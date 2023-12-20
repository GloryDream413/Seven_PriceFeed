const { deployContract, verifyContract } = require("../shared/helpers");
const { getDeployFilteredInfo } = require("../shared/syncParams");

async function deployKlayPriceFeed() {
    // await deployContract("klayPriceFeed", []);
    await verifyContract("klayPriceFeed", getDeployFilteredInfo("klayPriceFeed").imple, "contracts/klayPriceFeed.sol:klayPriceFeed", []);
}

module.exports = deployKlayPriceFeed