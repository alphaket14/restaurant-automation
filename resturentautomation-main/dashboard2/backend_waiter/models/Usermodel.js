import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },

    firstName: {
      type: String,
    },

    lastName: {
      type: String,
    },
    phone: {
      type: Number,
    },
    remember: { type: Boolean },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("Users", UserSchema);

export default UserModel;
