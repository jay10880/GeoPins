const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  email: String,
  picture: String
});

module.exports = mongoose.model("User", UserSchema);
