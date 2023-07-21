const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const USchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: {
        type:String,
        required: [true, 'First Name field required']
    },
    lastName: {
        type:String,
        required: [true, 'Last Name field required']
    },
    email: {
        type:String,
        required: [true, 'Email field required']
    },
    company: {
        type:String,
        required: false
    }
})

const User = mongoose.model('user', USchema, "user");

module.exports = User;