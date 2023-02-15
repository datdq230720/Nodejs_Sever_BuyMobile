
// Tầng giao tiếp với database
const userModel = require('./model');

exports.login = async (email) => {
    // const user = data.filter(item => item.email == email)[0];
    // return user;

    // select * from users where email = ''

    const user = await userModel.findOne({ email: email}, 'id email password');
    console.log("login: ", user);
    return user;
}

exports.register = async (email, password) => {
    const user = new userModel({email, password});
    return await user.save();
}

var data = [
    {
        _id: 1,
        email: 'admin@gmail.com',
        password: 'admin',
        name: 'Dinh Quoc Dat',
    }
]