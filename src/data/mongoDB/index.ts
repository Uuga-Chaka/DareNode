import mongoose, { ConnectOptions } from "mongoose";

type IDBOptions = { uri: string; dbName: string } & ConnectOptions;

export class MongoDB {
  static async connect({ uri, dbName, ...rest }: IDBOptions) {
    try {
      await mongoose.connect(uri, { dbName, ...rest });
    } catch (err) {
      console.error("Database connection error");
      throw err;
    }
  }
}
