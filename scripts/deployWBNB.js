const { deployContract, verifyContract } = require("../shared/helpers");
const { getDeployFilteredInfo } = require("../shared/syncParams");

async function deployWBNB() {
    // await deployContract("WBNB", []);
    await verifyContract("WBNB", getDeployFilteredInfo("WBNB").imple, "contracts/WBNB.sol:WBNB", []);
}

module.exports = deployWBNB