const User = require("./User");
const UserBooks = require("./UserBooks");
const Books = require("./Books");

User.hasMany(UserBooks, {
  foreignKey: "user_id",
  onDelete: "CASCADE"
});

UserBooks.belongsTo(User, {
  foreignKey: "user_id"
});

Books.hasMany(UserBooks, {
  foreignKey: "books_id",
  onDelete: "CASCADE"
});

UserBooks.belongsTo(Books, {
  foreignKey: "books_id",
})

module.exports = { User, Books, UserBooks };
