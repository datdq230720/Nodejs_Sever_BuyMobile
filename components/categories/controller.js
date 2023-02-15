const categoryController = require('./service');

exports.getCategories = async () => {
    return await categoryController.getCategories();
}

exports.getCategoryById = async (id) => {
    return await categoryController.getCategoryById(id);
}

exports.getCategoriesForOneProduct = async (selected) => {
    let categories = await categoryController.getCategories();
    categories = categories.map(item => {
        // if(item._id == selected) {
        //     item = {...item, selected: true}
        // }else{
        //     item = {...item, selected: false}
        // }
        item = {
            _id: item._id,
            name: item.name,
            selected: item._id.toString() == selected.toString()
        }
        return item;
    })
    return categories;
}