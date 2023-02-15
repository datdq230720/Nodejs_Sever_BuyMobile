const phoneModel = require('./model');

exports.getPphone = async () => {
    const phone = await phoneModel.find();
    return phone;
  }
  exports.getPphoneId = async (id) => {
    const phone = await phoneModel.findById(id);
    return phone;
  }