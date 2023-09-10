const notificationModel = require('../model/notificationModel')


const getAllNotification = async(req,res)=>{
    try{
        const notifications = await notificationModel.find()
        res.json(notifications)
    }catch(err){
        res.json({msg:err.message})
    }
}


const getSingleNotification = async(req,res)=>{
    const {id} = req.params
    try{
        const notification = await notificationModel.findById(id).populate('User')
        res.json(notification)
    }catch(err){
        res.json({msg:err.message}).status(400)
    }
}

// GET CARDS BY USER ID
const getUserNotification = async(req,res)=>{
    const {userId} = req.body
    try{
        const notification = await notificationModel.find({user:userId})
        res.json(notification)
    }catch(err){
        res.json({msg:err.message})
    }
}


const addNewNotification = async(req,res)=>{
    const data = req.body
    try{
        const newNotification = new notificationModel(data)
        await newNotification.save()
        res.json(newNotification)

    }catch(err){
        res.json({msg:err.message})
    }
}


const updateNotification = async(req,res)=>{
    const {id} = req.params
    const data = req.body
    try{
        const update = await notificationModel.findByIdAndUpdate(id,data,{new:true})
        res.json(update)
    }catch(err){
        res.json({msg:err.message})
    }
}


const deleteNotification = async(req,res)=>{
    const {id} = req.params
    try{
        await notificationModel.findByIdAndUpdate(id)
        res.json({msg:"Account deleted"}).status(200)
    }catch(err){
        res.json({msg:err.message})
    }
}

module.exports = {
    getAllNotification,
    getSingleNotification,
    getUserNotification,
    addNewNotification,
    updateNotification,
    deleteNotification
}