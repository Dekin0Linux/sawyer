const mongoose = require('mongoose')


const accountSchema = mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    },
    accountType : {
        type : String,
        //enum : ['Savings', 'Checking'], // Saving or Checking Account Types only
        default:'Savings',
    },
    balance :{
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
    accountNumber : {
        type : String,
        default : '3210XXXXX',
        unique : true,
        required:true,
    },
    loanBalance:{
        type : Number,
        default: 0
    },
    total : {
        type : Number,
        default: 0
    },
    status:{
        type: String,
        enum :["Active","Inactive"],// Active and Inactive Status for the accounts
        default : "Active"
    }
},{timestamps:true})



const accountModel = mongoose.model('Account',accountSchema)

module.exports = accountModel