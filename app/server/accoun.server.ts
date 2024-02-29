import { db } from "~/db/config.server"
import { opts } from "~/db/schema.server"
export const createAccount = async ({name , email , opt}: {name: string , email: string , opt:number}) => {
    const req = await db.insert(opts).values({email: email , name: name , opt:otp })
    console.log(name , email , pass)

}

