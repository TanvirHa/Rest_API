import mongoose from "mongoose";
import config from "config";
import { logger } from "../logger";

async function connect() {
  const dbUri: string = config.get("dbUri");

  try {
    await mongoose.connect(dbUri);
    logger.info("DataBase Connected");
  } catch (error) {
    logger.error(error);
  }
}

export default connect;
