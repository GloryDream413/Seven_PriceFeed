const { deployContract, verifyContract } = require("../shared/helpers");
const { getDeployFilteredInfo } = require("../shared/syncParams");

async function deployUSDT() {
    // await deployContract("USDT", []);
    await verifyContract("USDT", getDeployFilteredInfo("USDT").imple, "contracts/USDT.sol:USDT", []);
}

module.exports = deployUSDT