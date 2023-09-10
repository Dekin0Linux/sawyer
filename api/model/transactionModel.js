const mongoose = require('mongoose')


const transactionSchema = mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    },
    amount :{
        type : Number,
        min : 0,
        max : Infinity,
        default : 0,
    },
    currency:{
        type :String,
        trim : true,
        lowercase : true,
        default : '$'
    },
    type : {
        type : String,
        enum : ['Deposit','Withdraw','Transfer'],
        required:true,
    },
    status:{
        type : String,
        require : true,
        default: 'Pending'
    },
    date :{
        type : Date,
        default : new Date()
    }
},{timestamps:true})



const transactionModel = mongoose.model('transaction',transactionSchema)

module.exports = transactionModel