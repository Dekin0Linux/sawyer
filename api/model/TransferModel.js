const mongoose = require('mongoose')

const transferSchema = mongoose.Schema({
    sender: {},
    recipient : {},
    homeAddress : {},
    bankName : {},
    bankAddress : {},
    accountNumber: {},
    routingNumber : {},
    amount : {},
    date : {},
    transferId  : {},
    transferType : {},
    status : {},

})

const transferModel = mongoose.model('transfer',transferSchema)

module.exports = transferModel;