const phoneService = require('./service');

exports.getPhones = async () => {
    let phones = await phoneService.getPphone();
    phones = phones.map((item) => {
        item = {
            _id: item._id,
            name: item.name,
            price: item.price,
        }
        return item;
    })
    console.log("Phone: ", phones);
    return phones;
  }
  exports.getPhoneId = async (id) => {
    let phone = await phoneService.getPphoneId(id);
    phone = {
        _id: phone._id,
        name: phone.name,
        price: phone.price,
    }
    return phone;
  }