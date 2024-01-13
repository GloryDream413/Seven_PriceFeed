const { deployContract, verifyContract } = require("../shared/helpers");
const { getDeployFilteredInfo } = require("../shared/syncParams");

async function deployAPriceFeed() {
    await deployContract("APriceFeed", []);
    // await verifyContract("APriceFeed", getDeployFilteredInfo("APriceFeed").imple, "contracts/APriceFeed.sol:APriceFeed", []);
}

module.exports = deployAPriceFeed