const { clearHash } = require("../cache");

module.exports = async function (req, res, next) {
  await next();

  clearHash(JSON.stringify(req.body.userId));
};
