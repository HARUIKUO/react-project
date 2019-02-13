const mongoose = require('mongoose')
const { Schema } = mongoose

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const AdSchema = new Schema({
  name: String
})

var Ad = mongoose.model('Ad', AdSchema)

var axl = new Ad({name: "ikuo"})

console.log(axl);
