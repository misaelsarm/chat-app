import { Schema, Model, model, ObjectId } from 'mongoose'
import { v4 as uuidv4 } from "uuid";

export const USER_TYPES = {
  CONSUMER: "consumer",
  SUPPORT: "support",
};

interface User {
  _id: any,
  firstName: any
  lastName: any
  type: any,
  createUser?: any
}

const UserSchema = new Schema<User>(
  {
    _id: {
      type: String,
      default: () => uuidv4().replace(/\-/g, ""),
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true,
    collection: "users",
  }
);

const UserModel: Model<User> = model('User', UserSchema);

export default UserModel