const User = require("../models/model.user");
const response = require("../schemas/response");

const populate = async (req, res) => {
  try {
    populateUsers();
    response(res, {}, "dummy data populated", true, 200);
  } catch (error) {
    response(res, {}, error.message, false, 500);
  }
};

const populateUsers = async () => {
  const users = [
    {
      email: "jack@gmail.com",
      name: "Jack",
    },
  ];
  users.forEach((user) => {
    const newUser = new User(user);
    newUser.save();
  });
};

module.exports = populate;
