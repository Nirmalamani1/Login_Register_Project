const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost:27017/Table',{
    useUnifiedTopology:true,
    useNewUrlParser:true,
}, err => {
    if(err){
        console.log(`Error ${err}`);
    }
    console.log("Db connect..");
})

