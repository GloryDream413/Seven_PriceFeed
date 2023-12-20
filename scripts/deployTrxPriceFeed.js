const { deployContract, verifyContract } = require("../shared/helpers");
const { getDeployFilteredInfo } = require("../shared/syncParams");

async function deployTrxPriceFeed() {
    await deployContract("trxPriceFeed", []);
    // await verifyContract("trxPriceFeed", getDeployFilteredInfo("trxPriceFeed").imple, "contracts/trxPriceFeed.sol:klayPriceFeed", []);
}

module.exports = deployTrxPriceFeed