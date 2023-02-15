// Giao tiếp xử lý database

const userService = require('./service');

const bcrypt = require('bcryptjs');



exports.login = async (email, password) => {
    const user = await userService.login(email);
    if(!user){
        console.log("Login err: ");
        return null;
    } 
    // if(user && user.passWord == password){
    //     console.log("controler: ", password);
    //     return user
    // }
    
    const checKPassword = await bcrypt.compare(password, user.password);
    if(!checKPassword){
        console.log("controler: ", password);
        return null;
    }
    return {_id: user._id, email: user.email}
}

exports.register = async (email, password, confim_password) => {
    if(password != confim_password){
        return null;
    }
    let user = await userService.login(email, password);
    if(user) return null;
    
    const hash = await bcrypt.hash(password, await bcrypt.genSalt(10));
    user = await userService.register(email, hash);
    return {_id: user._id}
}