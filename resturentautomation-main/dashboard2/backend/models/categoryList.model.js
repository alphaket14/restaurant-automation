const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categorySchema = new Schema({
    rows: [{
        image : { data: Buffer, type: String, required: false,},
        parentCategory: [],
        foodCategory: { type: String, required: false,},
        status: []
        //timestamps: true,
    }],
    //image: { data: Buffer, type: String, required: false,},
},
)
const Category = mongoose.model('Category', categorySchema);
module.exports = Category;