const deployKLAY = require("../deployKLAY.js");
const deployLINK = require("../deployLINK.js");
const deployTRX = require("../deployTRX.js");
const deployWBNB = require("../deployWBNB.js");
const deployWETH = require("../deployWETH.js");
const deployWMATIC = require("../deployWMATIC.js");
const deployUSDT = require("../deployUSDT.js");

const deploy_core = async () => {
    await deployKLAY();
    await deployLINK();
    await deployTRX();
    await deployWBNB();
    await deployWETH();
    await deployWMATIC();
    await deployUSDT();
}

module.exports = { deploy_core };