const User = require("./User");
const UserBooks = require("./UserBooks");
const Books = require("./Books");

User.belongsToMany(Books, {
  foreignKey: "user_id",
  through: {
    model: UserBooks,
    unique: false,
  },
});

Books.belongsToMany(User, {
  foreignKey: "books_id",
  through: {
    model: UserBooks,
    unique: false,
  },
});

module.exports = { User, Books, UserBooks };
