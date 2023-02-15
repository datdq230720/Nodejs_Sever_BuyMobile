const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    id: { type: ObjectId }, // khoa chinh
    email: { type: String, required: true },
    password: { type: String },
    
});

module.exports = mongoose.model('user', userSchema);

// mongodb+srv://admin:<password>@cluster0.9znjp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority