const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order", {
  isFulfilled: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false,
  },
  buyerEmail: {
    type: Sequelize.EMAIL,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  totalAmount: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

module.exports = Order;

// orderId;
// userId;
// Amount;
// buyerEmail;
// buyerName;

// does order
