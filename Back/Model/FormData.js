const mongoose = require('mongoose')
const FromDataSchema = new mongoose.Schema({
    name: String,
    email:String,
    password:String
})
 const FormDataModel = mongoose.model('log_reg', FromDataSchema);

 module.exports = FormDataModel;