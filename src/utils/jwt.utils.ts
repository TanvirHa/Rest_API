import jwt from "jsonwebtoken";
import config from "config";

const privateKey: string = config.get("privateKey");

export function sign(object: Object, options?: jwt.SignOptions | undefined) {
  return jwt.sign(object, privateKey, options);
}
