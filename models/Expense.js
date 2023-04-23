const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Expense = sequelize.define("Expense",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    Amount:{
        type:Sequelize.INTEGER,
        allowNull:false,
    },
    Description:{
        type:Sequelize.STRING,
        allowNull:false
    },
    Type:{
        type:Sequelize.STRING,
        allowNull:false
    }
})


module.exports = Expense;