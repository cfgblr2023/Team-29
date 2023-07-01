const response = require("../schemas/response");
const User = require("../models/model.user");

const clear = async (req, res) => {
  try {
    await User.collection.drop();
    response(res, {}, "collection dropped", true, 200);
  } catch (error) {
    response(res, {}, error.message, false, 500);
  }
};

module.exports = clear;
