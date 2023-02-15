const studentModel = require('./model');

// show dữ liệu
exports.getStudent = async () => {
    const student = await studentModel.find();
    return student;
}
exports.delete = async (id) => {
    await studentModel.findByIdAndDelete(id);
}

// update dữ liệu
exports.update = async (id, student) => {
    await studentModel.findByIdAndUpdate(id, student);
}

// thêm dữ liệu
exports.insert = async (student) => {   
    const s = new studentModel(student);
    return await s.save();
}