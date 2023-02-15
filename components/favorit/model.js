const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const favoritSchema = new Schema({
    id: { type: ObjectId },
    name: { type: String },
    price: { type: Number },
    image: { type: String },
    user_id: { type: Schema.Types.ObjectId },

});

module.exports = mongoose.model('favorit', favoritSchema);