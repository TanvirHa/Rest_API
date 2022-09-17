import { Request, Response } from "express";
import { createUser } from "../service/user.service";
import { logger } from "../logger";

export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await createUser(req.body);
    return res.send(user);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}

export async function createUserSessionHandler(req: Request, res: Response) {
  // validate the email and password
  //create a session
  // create a access token
  //create a refresh token
  // send refresh & access token back
}
