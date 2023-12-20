const { deployContract, verifyContract } = require("../shared/helpers");
const { getDeployFilteredInfo } = require("../shared/syncParams");

async function deployLINK() {
    // await deployContract("LINK", []);
    await verifyContract("LINK", getDeployFilteredInfo("LINK").imple, "contracts/LINK.sol:LINK", []);
}

module.exports = deployLINK