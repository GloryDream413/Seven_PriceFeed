const { deployContract, verifyContract } = require("../shared/helpers");
const { getDeployFilteredInfo } = require("../shared/syncParams");

async function deployTRX() {
    // await deployContract("TRX", []);
    await verifyContract("TRX", getDeployFilteredInfo("TRX").imple, "contracts/TRX.sol:TRX", []);
}

module.exports = deployTRX