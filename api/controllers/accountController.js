const AccountModel = require('../model/accountModel')

const getAllAccounts = async(req,res)=>{
    try{
        const accounts = await AccountModel.find().populate('user')
        res.json(accounts)
    }catch(err){
        res.json({msg:err.message})
    }
}

const getByUserId = async(req,res)=>{
    const clientid = req.body.clientid
    try{
        const account = await AccountModel.findOne({}).where('user').equals(clientid).populate('user')
        res.json(account)
    }catch(err){
        res.json({msg:err.message}).status(400)
    }
}

const getSingleAccount = async(req,res)=>{
    const {id} = req.params
    try{
        const account = await AccountModel.findById(id).populate('user')
        res.json(account)
    }catch(err){
        res.json({msg:err.message}).status(400)
    }
}



const addNewAccount = async(req,res)=>{
    const data = req.body
    try{
        const newAccount = new AccountModel(data)
        await newAccount.save()
        res.send(newAccount)
    }catch(err){
        res.json({msg:err.message})
    }
}


const updateAccount = async(req,res)=>{
    const {id} = req.params
    const data = req.body
    try{
        const update = await AccountModel.findByIdAndUpdate(id,data,{new:true})
        res.json(update)
    }catch(err){
        res.json({msg:err.message})
    }
}

const deleteAccount = async(req,res)=>{
    const {id} = req.params
    try{
        await AccountModel.findByIdAndUpdate(id)
        res.json({msg:"Account deleted"}).status(200)
    }catch(err){
        res.json({msg:err.message})
    }
}

module.exports = {
    getAllAccounts,
    getByUserId,
    getSingleAccount,
    addNewAccount,
    updateAccount,
    deleteAccount
    
}