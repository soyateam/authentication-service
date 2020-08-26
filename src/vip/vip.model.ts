import * as mongoose from "mongoose";
import { ROLE, IUser } from "./vip.interface";

const VipSchema: mongoose.Schema = new mongoose.Schema(
  {
    userID: {
      type: String,
      required: true
    },
    role: {
      type: ROLE,
      required: true
    }
  },
);

export const VipModel = mongoose.model<IUser & mongoose.Document>("vip", VipSchema);
