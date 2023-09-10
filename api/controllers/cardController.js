const CardModel = require('../model/cardModel')




const getAllCards = async(req,res)=>{
    try{
        const cards = await CardModel.find().populate('User')
        res.json(cards)
    }catch(err){
        res.json({msg:err.message})
    }
}


const getSingleCard = async(req,res)=>{
    const {id} = req.params
    try{
        const card = await CardModel.findById(id).populate('User')
        res.json(card)
    }catch(err){
        res.json({msg:err.message}).status(400)
    }
}

// GET CARDS BY USER ID
const getUserCards = async(req,res)=>{
    const {clientid} = req.body
    try{
        const usercards = await CardModel.find({user:clientid})
        res.json(usercards)
    }catch(err){
        res.json({msg:err.message})
    }
}


const addNewCard = async(req,res)=>{
    const data = req.body
    try{
        const newCard = new CardModel(data)
        await newCard.save()
        res.send(newCard)
    }catch(err){
        res.json({msg:err.message})
    }
}


const updateCard = async(req,res)=>{
    const {id} = req.params
    const data = req.body
    try{
        const update = await CardModel.findByIdAndUpdate(id,data,{new:true})
        res.json(update)
    }catch(err){
        res.json({msg:err.message})
    }
}


const deleteCard = async(req,res)=>{
    const {id} = req.params
    try{
        await CardModel.findByIdAndUpdate(id)
        res.json({msg:"Account deleted"}).status(200)
    }catch(err){
        res.json({msg:err.message})
    }
}

module.exports = {
    getAllCards,
    getSingleCard,
    getUserCards,
    addNewCard,
    updateCard,
    deleteCard,
    
}