const Expense = require("../models/Expense");

exports.getExpenses = (req,res,next)=>{
    Expense.findAll()
    .then(Expense=>{
        console.log("got expenses");
        res.send(Expense)
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.postExpenses = (req,res,next)=>{
    const Amount = req.body.amount;
    const Description = req.body.description;
    const Type = req.body.type;
    
    Expense.create({
        Amount,Description,Type
    })
    .then(result=>{
        // console.log(result)
        res.send(result)
    })
    .catch(err=>{
        console.log(err);
    })
}

exports.deleteExpenses = (req,res,next)=>{
    const Id = req.params.id;
    Expense.destroy({where:{id:Id}})
    .then(result=>{
        console.log(result);
        res.end();
    })
    .catch(err=>console.log(err));
    
}