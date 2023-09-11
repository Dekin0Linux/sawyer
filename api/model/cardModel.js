const mongoose = require('mongoose')


const CardSchema = mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    },
    cardNumber :{
        type : String,
        required:true,
        unique : true
    },
    cardType : {
        type : String,
    },
    currency:{
        type :String,
        default : '$'
    },
    cardHolderName : {
        type : String,
        required:true,
    },
    expiryDate:{
        type : String,
        require : true,
    },
    cvv:{
        type : String,
        required : true
    },
    cardLimit : {
        type : Number,
        default : 0
    }
},{timestamps:true})



const CardModel = mongoose.model('Card',CardSchema)

module.exports = CardModel