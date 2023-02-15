const studentServer = require('./server');

exports.getStudents = async () => {
    let students = await studentServer.getStudent();
    students = students.map((item) => {
        item = {
            _id: item._id,
            name: item.name,
            grade: item.grade,
        }
        return item;
    })
    return students;
}
exports.delete = async (id) => {

    await studentServer.delete(id);
    return true;
}
exports.update = async (id, student) => {

    await studentServer.update(id, student);
    return true;
}
exports.insert = async (body) => {
    let student = await studentServer.insert(body);
    return student;
}