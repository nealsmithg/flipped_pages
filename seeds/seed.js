const sequelize = require("../config/connection");
const { User, Books, UserBooks } = require("../models");

const userData = require("./userData.json");
const booksData = require("./booksData.json");
const userBooksData = require("./userBooksData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Books.bulkCreate(booksData);

  await UserBooks.bulkCreate(userBooksData);

  process.exit(0);
};

seedDatabase();
