const mongoose=require('mongoose')
const validator = require('validator');


const UserSchema = new mongoose.Schema({
    UserName: {
      type: String,
      required: true,
      unique: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: 'Invalid email address',
      },
    },
    PhoneNumber: {
      type: String,
      length: 10,
      required: true,
    },
    Age: {
        type: Number,
        min: 18,
        required: true,
      },
       UserImage:
        {
           type:String,
        },
        AdharImage:
        {
            type:String,
        },
        LicenseImage:
        {
            type:String
        },
        Password:
        {
            type:String,
            required:true
        },
        Role: {
          type: String,
          enum: ['admin', 'normal'],
          required: true
        },
  },
  {
    timestamps: true,
  });

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;