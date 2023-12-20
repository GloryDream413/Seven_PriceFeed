const { deployContract, verifyContract } = require("../shared/helpers");
const { getDeployFilteredInfo } = require("../shared/syncParams");

async function deployWmaticPriceFeed() {
    // await deployContract("wmaticPriceFeed", []);
    await verifyContract("wmaticPriceFeed", getDeployFilteredInfo("wmaticPriceFeed").imple, "contracts/wmaticPriceFeed.sol:wmaticPriceFeed", []);
}

module.exports = deployWmaticPriceFeed