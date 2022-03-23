const { getDbRef } = require("../lib/mongoUtils");
const bcryptjs = require("bcryptjs");

const collectionName = "users";

const findAllUsers = async () => {
  const users = await getDbRef()
    .collection(collectionName)
    .find()
    .toArray()
    .catch((error) => console.error(error));
  return users;
};

const createUser = async (body) => {
  const salt = bcryptjs.genSaltSync();
  await getDbRef()
    .collection(collectionName)
    .insertOne({
      email: body.email,
      username: body.username,
      password: bcryptjs.hashSync(body.password, salt),
      role: body.role,
    })
    .catch((error) => console.error(error));
};

async function getUserByUsername(username) {
  const user = await getDbRef()
    .collection(collectionName)
    .findOne({ username: username });
  return user;
}

module.exports = { findAllUsers, createUser, getUserByUsername };
