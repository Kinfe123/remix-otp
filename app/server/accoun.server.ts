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


    const result = await req.json()
    console.log('THe resolved result is: ' , result)
  console.log(name, email, otp);
};
