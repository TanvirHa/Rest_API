import { LeanDocument } from "mongoose";
import { UserDocument } from "../model/user.model";
import config from "config";
import Session, { SessionDocument } from "../model/session.mode";
import { sign } from "../utils/jwt.utils";

export async function createSession(userId: string, userAgent: string) {
  const session: any = await Session.create({ user: userId, userAgent });

  return session.toJSON;
}

export function createAccessToken({
  user,
  session,
}: {
  user: UserDocument | LeanDocument<UserDocument>;
  session:
    | Omit<SessionDocument, "password">
    | LeanDocument<Omit<SessionDocument, "password">>;
}) {
  // Build and return the new access token
  const accessToken = sign(
    { ...user, session: session._id },
    { expiresIn: config.get("accessTokenTtl") }
  );

  return accessToken;
}
