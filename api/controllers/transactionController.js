const TransactionModel = require('../model/transactionModel')



const getAllTransactions = async(req,res)=>{
    try{
        const transaction = await TransactionModel.find()
        res.json(transaction)
    }catch(err){
        res.json({msg:err.message})
    }
}


const getSingleTransaction = async(req,res)=>{
    const {id} = req.params
    try{
        const transaction = await TransactionModel.findById(id).populate('User')
        res.json(transaction)
    }catch(err){
        res.json({msg:err.message}).status(400)
    }
}

// GET CARDS BY USER ID
const getUserTransactions = async(req,res)=>{
    const {clientid} = req.body
    try{
        const transactioncards = await TransactionModel.find({user:clientid})
        res.json(transactioncards)
    }catch(err){
        res.json({msg:err.message})
    }
}


const addNewTransaction = async(req,res)=>{
    const data = req.body
    try{
        const newTransaction = new TransactionModel(data)
        await newTransaction.save()
        res.json(newTransaction)
    }catch(err){
        res.json({msg:err.message})
    }
}


const updateTransaction = async(req,res)=>{
    const {id} = req.params
    const data = req.body
    try{
        const update = await TransactionModel.findByIdAndUpdate(id,data,{new:true})
        res.json(update)
    }catch(err){
        res.json({msg:err.message})
    }
}


const deleteTransaction = async(req,res)=>{
    const {id} = req.params
    try{
        await TransactionModel.findByIdAndUpdate(id)
        res.json({msg:"Account deleted"}).status(200)
    }catch(err){
        res.json({msg:err.message})
    }
}

module.exports = {
    getAllTransactions,
    getSingleTransaction,
    getUserTransactions,
    addNewTransaction,
    updateTransaction,
    deleteTransaction
}