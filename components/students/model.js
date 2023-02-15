const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const studentSchema = new Schema({
    id: { type: ObjectId }, // khoa chinh
    name: { type: String },
    grade: { type: String }
});

module.exports = mongoose.model('student', studentSchema); 