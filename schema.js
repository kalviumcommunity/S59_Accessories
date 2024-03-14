const mongoose = require('mongoose');

const data = new mongoose.Schema({
    item : {
        type : String,
        required : true 
    },
    type : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    material : {
        type : Array,
        // required : true
    },
    function : {
        type : String,
        // required : true
    }
})

const dataSet = mongoose.model('dataSet',data);

module.exports = dataSet