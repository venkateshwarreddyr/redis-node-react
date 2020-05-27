const mongoose = require("mongoose");
const redis = require("redis");
const util = require("util");
const client = redis.createClient("redis://127.0.0.1:6379");
client.hget = util.promisify(client.hget);
const exec = mongoose.Query.prototype.exec;

mongoose.Query.prototype.cache = async function (options = {}) {
  this.useCache = true;
  this.hashKey = JSON.stringify(options.key) || "";

  return this;
};
mongoose.Query.prototype.exec = async function () {
  if (!this.useCache) {
    return exec.apply(this, arguments);
  }
  const key = Object.assign({}, this.getQuery(), {
    collection: this.mongooseCollection.name,
  });
  const cacheValue = await client.hget(this.hashKey, JSON.stringify(key));
  console.log(key, cacheValue, "hget");
  if (cacheValue) {
    const doc = JSON.parse(cacheValue);
    return Array.isArray(doc)
      ? doc.map((d) => new this.model(d))
      : this.model(doc);
  }
  const result = await exec.apply(this, arguments);
  await client.hset(this.hashKey, JSON.stringify(key), JSON.stringify(result));
  return result;
};

module.exports = {
  clearHash(hashKey) {
    client.del(JSON.stringify(hashKey));
  }
};