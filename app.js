const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const Sequelize = require("./util/database");
const cors = require("cors");

app.use(bodyParser.json({urlencoded:true}));
app.use(cors())

const expenseControllers = require("./controllers/expenses");

app.get("/",expenseControllers.getExpenses);
app.post("/",expenseControllers.postExpenses);
app.delete("/:id",expenseControllers.deleteExpenses);

Sequelize.sync()
.then((res)=>{
    console.log("database synchronised")
})
.catch(err=>console.log(err));

app.listen(3000,()=>{
    console.log("connected to localhost")
})