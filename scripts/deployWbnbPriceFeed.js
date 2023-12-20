const { deployContract, verifyContract } = require("../shared/helpers");
const { getDeployFilteredInfo } = require("../shared/syncParams");

async function deployWbnbPriceFeed() {
    // await deployContract("wbnbPriceFeed", []);
    await verifyContract("wbnbPriceFeed", getDeployFilteredInfo("wbnbPriceFeed").imple, "contracts/wbnbPriceFeed.sol:wbnbPriceFeed", []);
}

module.exports = deployWbnbPriceFeed