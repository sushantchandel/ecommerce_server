import mongoose from "mongoose";
import Authroles from "../utils/authRoles";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto"

const userschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: [50, "name must be at less then 50"],
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: [8, "password must be atleast 8 chractors"],
      select: false,
    },
    phonenumber: {
      type: Number,
      required: true,
    },
    role: {
      type: String,
      enum: Object.values(Authroles),
      default: Authroles.USER,
    },
    forgetPasswordToken: String,
    forgetPasswordExpiry: Date,
  },

  { timestamps: true }
);

userschema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = bcrypt.hash(this.password, 10);
});

userschema.methods = {
  // compare password
  comparePassword: async function (enteredpassword) {
    return await bcrypt.compare(enteredpassword, this.password);
  },
  getJWTtoken: function () {
    jwt.sign({ _id: this._id, role: this.role }, config.JWT_SECRET, {
      expliresIn: config.env.JWT_SECRET,
    });
  },
  generateForgetPasswordToken:function(){
    const forgetToken = crypto.randomBytes(20).toString('hex')
    this.forgetPasswordToken = crypto
    .createHash('sha256')
    .update(forgetToken)
    digest("hex")

    this.forgetPasswordExpiry = Date.now()+20*60*1000
  }
};

export default mongoose.model("User", userschema);
