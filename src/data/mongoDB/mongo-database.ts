import mongoose, { ConnectOptions } from "mongoose";

type IDBOptions = { url: string; dbName: string } & ConnectOptions;

export class MongoDB {
  static async connect({ url, dbName, ...rest }: IDBOptions) {
    console.log("Connecting...");
    try {
      await mongoose.connect(url, { dbName: dbName });
      console.log("Connected!");
    } catch (err) {
      console.error("Database connection error!");
      throw err;
    }
  }
}
