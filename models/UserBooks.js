const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class UserBooks extends Model {}

UserBooks.init(
  {
    books_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Books",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
      },
    },
    read: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    own: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    want: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    heard_about: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "UserBooks",
  }
);

module.exports = UserBooks;
