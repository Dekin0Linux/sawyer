const UserModel = require('../model/userModel')
const AccountModel = require('../model/accountModel')

const getAllUsers = async (req,res)=>{
    const users = await UserModel.find()
    res.json(users)
}

const getSingleUser = async(req,res)=>{
    const {id} = req.params
    try{
        const user = await UserModel.findById(id)
        res.json(user)
    }catch(err){
        res.json({msg:err.message}).status(400)
    }
}

const login = async(req,res)=>{
    const {email,password} = req.body
    try{
        let userEmail = await UserModel.findOne({email})
        if(!userEmail){
            return res.status(404).json('User not found')
        }
        if(userEmail.password === password){
            res.json(userEmail._id)
        }else{
            return res.status(404).json('Invalid password')
        }
    }catch(err){
        res.json({error: err.message})
    }

}

const addNewUser = async(req,res)=>{
    const data = req.body
    try{
        const newUser = new UserModel(data)
        await newUser.save()
        if(newUser){
            const newAccount = new AccountModel({user:newUser._id})
            await newAccount.save()
            console.log(newUser._id)
            res.send(newUser)
        }
    }catch(err){
        res.json({msg:err.message})
    }
}


const updateUser = async(req,res)=>{
    const {id} = req.params
    const data = req.body
    try{
        const update = await UserModel.findByIdAndUpdate(id,data,{new:true})
        res.json(update)
    }catch(err){
        res.json({msg:err.message})
    }
}

const deleteUser = async(req,res)=>{
    const {id} = req.params
    try{
        await UserModel.findByIdAndUpdate(id)
        res.json({msg:"User deleted"}).status(200)
    }catch(err){
        res.json({msg:err.message})
    }
}




module.exports = {
    getAllUsers,
    getSingleUser,
    addNewUser,
    updateUser,
    deleteUser,
    login
}