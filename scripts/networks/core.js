const deployAPriceFeed = require("../deployAPriceFeed.js");
const deployTrxPriceFeed = require("../deployTrxPriceFeed.js");
const deployWbnbPriceFeed = require("../deployWbnbPriceFeed.js");
const deployWmaticPriceFeed = require("../deployWmaticPriceFeed.js");

const deploy_core = async () => {
    await deployAPriceFeed();
    // await deployTrxPriceFeed();
    // await deployWbnbPriceFeed();
    // await deployWmaticPriceFeed();
}

module.exports = { deploy_core };