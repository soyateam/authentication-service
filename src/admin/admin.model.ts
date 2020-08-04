import * as mongoose from "mongoose";
import { ROLE, IUser } from "./admin.interface";

const AdminSchema: mongoose.Schema = new mongoose.Schema(
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

export default mongoose.model<IUser & mongoose.Document>("Admin", AdminSchema);