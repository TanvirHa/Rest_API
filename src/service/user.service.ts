import { DocumentDefinition } from "mongoose";
import User, { UserDocument } from "../model/user.model";
import { omit } from "lodash";

export async function createUser(input: DocumentDefinition<UserDocument>) {
  try {
    const user = await User.create(input);
    return omit(user.toJSON(), "password");
  } catch (error) {
    console.log(error);
  }
}

function findUser() {}

export async function validatePassword({
  email,
  password,
}: {
  email: UserDocument["email"];
  password: string;
}) {
  const user = await User.findOne({ email });

  if (!user) {
    return false;
  }

  const isValid = await user.comparePassword(password);

  if (!isValid) {
    return false;
  }

  return omit(user.toJSON(), "password");
}
