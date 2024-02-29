import { eq } from "drizzle-orm";
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



export const somehow = () => {
  return 'ping: from server'
}


export const accountFind = async ({email}: {email: string}) => {
 const exists = await db.select().from(otps).where(eq(otps.email, email))
 console.log('the email' , exists)
 return exists

}

export const fetchAccount = async () => {
  const accounts = await db.select().from(otps)
  return accounts
}