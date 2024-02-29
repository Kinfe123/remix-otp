import { Button } from "~/components/ui/button";
import { Link, MetaFunction, useActionData, useLoaderData } from "@remix-run/react";
import { Command } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { ThemeToggle } from "./resources.theme-toggle";
import { OTPInput } from "input-otp";
import { FakeDash, Slot } from "~/components/opt-form";
import { json } from "@remix-run/node";
import { useState } from "react";
import TestForm from "~/components/test-form";
import AccountForm from "~/components/account-form";
import type { ActionFunctionArgs } from "@remix-run/node";
import { randomPassword } from "~/lib/password";
import { createAccount, fetchAccount, somehow } from "~/server/account.server";


export const meta: MetaFunction = () => {
  return [
    { title: "A Remix otp in actions" },
    {
      property: "og:title",
      content: "remix otp",
    },
    {
      name: "description",
      content: "Showcasing the remix opt in action",
    },
  ];
};

export const action = async ({
  request,
}: ActionFunctionArgs) => {
  const formData = await request.formData()
  const name = formData.get('name')
  const otp = randomPassword()
  const email = formData.get('email')

  const allAccount = await fetchAccount()
  const filtered = allAccount.filter(f => f.email === email)
  console.log('The filtered one is : ' , filtered)
  if(filtered.length) {
    return json({name:"" , email:"" , otp:otp})
  }

  return json({ name: name, email: email, otp: otp })


};

export default function Index() {
  const actionsData = useActionData<typeof action>()
  const name = actionsData?.name
  const email = actionsData?.email
  const otp = actionsData?.otp
  const fetchAccount = async () => {
    const req = await fetch('/account')
    const res = await req.json()
    console.log("The data os : ", res)
    

  }

  return (
    <section className="w-full min-h-screen flex flex-col">
      <nav className="flex items-center justify-between p-4 w-full">
        <Link to="/" className="flex items-center space-x-2">
          <Command className="h-8 w-8" />
          <h1 className="text-xl font-semibold">Remixos</h1>
        </Link>
        <ThemeToggle />
      </nav>
      <div className="container flex justify-center px-4 md:px-6 flex-1 py-8 overflow-x-hidden">
        <div className="flex flex-col items-center space-y-4 text-center p-4 md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
            A{" "}
            <span className="font-extrabold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
              REMIX
            </span>{" "}
            Otp in Actions

          </h1>

          <p className="text-muted-foreground font-bold mt-2">
            With optimistic dark-mode.
          </p>
          <button onClick={fetchAccount}>Fetch account</button>
         
          <p className="text-muted-foreground mt-2">
            remix + turso + drizzle + nodemailer + sqlite
          </p>

          <Card className="relative group overflow-hidden rounded-lg">
            <CardContent className="p-1 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 bg-300% animate-gradient">
              <Button asChild>
                <Link to="/about">
                  Test it out
                </Link>
              </Button>
            </CardContent>
          </Card>


          <div className="max-w-6xl mx-auto justify-center items-center flex flex-col gap-10">
            <AccountForm />
            {(name && email && otp) && <TestForm otpcode={otp!} name={name as string} email={email as string} />}






          </div>
          {actionsData?.otp && <code>The code is: {actionsData.otp}</code>}


        </div>
      </div>
    </section>
  );
}
