// Accessing Mongoose package
const mongoose = require("mongoose");

// Database connection
mongoose.connect('mongodb+srv://user1:seu@fsdfiles.ogsbi.mongodb.net/PROJECT?retryWrites=true&w=majority'); 
const Schema = mongoose.Schema;

// Schema definition
const ComplaintSchema = new Schema({
    category: String,
    name: String,
    age: String,
    gender: String,
    address: String,
    place: String,
    pin: String,
    phoneno: String,
    email: String,
    complaint: String,
    file: String 
});

// Model creation
var Complaintdata = mongoose.model("complaintdata",ComplaintSchema);

// Exporting Model 
module.exports = Complaintdata;