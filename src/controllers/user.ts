import { Request, Response } from "express";
// utils
// models
import UserModel, { USER_TYPES } from '../models/User.js';

export default {
  onGetAllUsers: async (req: Request, res: Response) => {

    try {
      const users = await UserModel.find();
      return res.status(200).json({ success: true, users });
    } catch (error) {
      return res.status(500).json({ success: false, error: error })
    }

  },
  onGetUserById: async (req: Request, res: Response) => {
    try {
      const user = await UserModel.findById(req.params.id);
      return res.status(200).json({ success: true, user });
    } catch (error) {
      return res.status(500).json({ success: false, error: error })
    }

  },
  onCreateUser: async (req: Request, res: Response) => {

    console.log(req.body);

    try {
      const { firstName, lastName, type } = req.body;
      const user = await UserModel.create({ firstName, lastName, type });
      return res.status(200).json({ success: true, user });
    } catch (error) {
      console.log({ error });
      return res.status(500).json({ success: false, error: error })
    }

  },
  onDeleteUserById: async (req: Request, res: Response) => { },
}