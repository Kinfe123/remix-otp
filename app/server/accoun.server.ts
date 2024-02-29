import { db } from "~/db/config.server"
import { opts } from "~/db/schema.server"
export const createAccount = async ({name , email , pass}: {name: string , email: string , pass:string}) => {
    const req = await db.insert(opts).values({email: email , name: name , })
    console.log(name , email , pass)

}

