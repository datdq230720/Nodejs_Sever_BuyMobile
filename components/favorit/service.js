const favoritModel = require('./model');

exports.getFavoritService = async (user_id) => {
    const favorit = await favoritModel.find({user_id: user_id});
    return favorit;
}
exports.insert = async (favorit) => {   
    const f = new favoritModel(favorit);
    return await f.save();
}

exports.delete = async (id) => {
    await favoritModel.findByIdAndDelete(id);
}