import { db } from "~/db/config.server";
import { otps } from "~/db/schema.server";
export const createAccount = async ({
  name,
  email,
  otp,
}: {
  name: string;
  email: string;
  otp: number;
}) => {
  const req = await db
    .insert(otps)
    .values({ email: email, name: name, otp: otp });

  console.log("THe re is : " , req)
  return req
  
};




