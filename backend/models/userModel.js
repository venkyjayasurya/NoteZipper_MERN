// Model file defines type of data use by the variables

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    //   If we need the admin
    type: Boolean,
    required: true,
    default: false,
  },
  pic: {
    type: String,
    required: true,
    default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
},
{
    timestamps: true,
});

// Add hashing for the password security before saving it to database
userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcrypt.genSalt(10)

    this.password = await bcrypt.hash(this.password, salt)
})

// Check whether the password entered in frontend is same as the hashed password
userSchema.methods.matchPassword = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password)
}

const User = mongoose.model('User', userSchema)

module.exports = User