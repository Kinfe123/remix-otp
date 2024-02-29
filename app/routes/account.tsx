import {ActionFunctionArgs, type  LoaderFunctionArgs } from "@remix-run/node";
import { json } from "drizzle-orm/mysql-core";
import { createAccount } from "~/server/account.server";

export async function loader({
    request,
  }: LoaderFunctionArgs) {
   const res = await request.body
   return res
  }
  


export async function action({request} : ActionFunctionArgs){
    const res = await request.json()
    const {name , email , otp} = res
    const result = await createAccount({name:name,email:email ,otp:otp})
    return json(result)

}