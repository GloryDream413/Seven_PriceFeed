const { deployContract, verifyContract } = require("../shared/helpers");
const { getDeployFilteredInfo } = require("../shared/syncParams");

async function deployWETH() {
    // await deployContract("WETH", []);
    await verifyContract("WETH", getDeployFilteredInfo("WETH").imple, "contracts/WETH.sol:WETH", []);
}

module.exports = deployWETH