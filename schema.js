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
    material : {
        type : String,
        required : true
    },
    function : {
        type : Array,
        // required : true
    },
    brands : {
        type : Array,
        // required : true
    },
    trends : {
        type : Array,
        // required : true
    }
})

const dataSet = mongoose.model('dataSet',data);

module.exports = dataSet