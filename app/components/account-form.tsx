import { Form } from "@remix-run/react";
import type { ActionFunctionArgs } from "@remix-run/node";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import TestForm from "./test-form";

export const action = async ({
    request,
}: ActionFunctionArgs) => {
    const formData = await request.formData()
    const name = formData.get('name')
    const email = formData.get('email')
    console.log('The email and name are:', name, email)



};
export default function AccountForm() {

    return (
        <div className="h-full w-full mx-auto gap-10 flex flex-col justify-center items-center">
            <h1>Please , Drop your name and email</h1>

            <Form method="post" className="gap-10">

                <Input name="name" placeholder="Name" value={'name'} className="mb-5" />
                <Input name='email' placeholder="Email" value={'name@abeb.com'} className="mb-5" />
                <Button type='submit' variant='default' >Sign in </Button>

            </Form>
            <TestForm />

        </div>
    )
}