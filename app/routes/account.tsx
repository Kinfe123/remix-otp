import {ActionFunctionArgs, type  LoaderFunctionArgs } from "@remix-run/node";
import { json } from "drizzle-orm/mysql-core";
import { accountFind, createAccount, fetchAccount } from "~/server/account.server";

export async function loader({
    request,
  }: LoaderFunctionArgs) {
   const res = await fetchAccount()
   return res
  }
  


export async function action({request} : ActionFunctionArgs){
    const res = await request.json()
    const {name , email , otp} = res
    const exists = await accountFind(email)
    console.log(exists)
    const result = await createAccount({name:name,email:email ,otp:otp})
    return json(result)

}

