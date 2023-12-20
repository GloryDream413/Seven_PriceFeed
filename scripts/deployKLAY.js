const { deployContract, verifyContract } = require("../shared/helpers");
const { getDeployFilteredInfo } = require("../shared/syncParams");

async function deployKLAY() {
    // await deployContract("KLAY", []);
    await verifyContract("KLAY", getDeployFilteredInfo("KLAY").imple, "contracts/KLAY.sol:KLAY", []);
}

module.exports = deployKLAY