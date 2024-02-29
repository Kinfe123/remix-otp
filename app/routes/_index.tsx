import { Button } from "~/components/ui/button";
import { Link, MetaFunction } from "@remix-run/react";
import { Command } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { ThemeToggle } from "./resources.theme-toggle";
import { OTPInput } from "input-otp";
import { FakeDash, Slot } from "~/components/opt-form";
import { useState } from "react";
import TestForm from "~/components/test-form";

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

export default function Index() {
  const [val , setVal] = useState('')
  const handleSubmit = () => {
    console.log('hELLO WORLD')

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
          <p className="text-muted-foreground mt-2">
           remix + turso + drizzle + nodemailer + sqlite 
          </p>

          <Card className="relative group overflow-hidden rounded-lg">
            <CardContent className="p-1 bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 bg-300% animate-gradient">
              <Button asChild>
                <Link to="https://github.com/Kinfe123/remix-otp">
                  Check it on Github
                </Link>
              </Button>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center">
              <TestForm />
          </div>

        </div>
      </div>
    </section>
  );
}
