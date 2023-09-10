const mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'User'
    },
    message: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    isRead: {
      type: Boolean,
      default: false,
    }
  },{timestamps:true});

const notificationModel = mongoose.model('notification',notificationSchema)


module.exports = notificationModel;

