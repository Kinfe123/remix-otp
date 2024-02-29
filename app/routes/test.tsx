import { type ActionFunctionArgs } from "@remix-run/node";
import AccountForm from "~/components/account-form"
import { randomPassword } from "~/lib/password";
import { json } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import TestForm from "~/components/test-form";
export const action = async ({
    request,
  }: ActionFunctionArgs) => {
    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    console.log(name , email , randomPassword())
    return json({name: name , email: email , opt: randomPassword()})
  
  
  };
const TestPage = () =>{
    const actionsData = useActionData<typeof action>()
    console.log(actionsData?.opt)
  
    return (
        <div className="max-w-6xl mx-auto justify-center items-center flex flex-col gap-10">
              <AccountForm />  
              <TestForm otpcode={actionsData?.opt}/>
              
              
             

        

        </div>
    )
}

export default TestPage