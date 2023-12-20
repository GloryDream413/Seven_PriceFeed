const { deployContract, verifyContract } = require("../shared/helpers");
const { getDeployFilteredInfo } = require("../shared/syncParams");

async function deployWMATIC() {
    // await deployContract("WMATIC", []);
    await verifyContract("WMATIC", getDeployFilteredInfo("WMATIC").imple, "contracts/WMATIC.sol:WMATIC", []);
}

module.exports = deployWMATIC