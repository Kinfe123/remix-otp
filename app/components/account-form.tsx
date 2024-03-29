import { Form } from "@remix-run/react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

// export const action = async ({
//     request,
// }: ActionFunctionArgs) => {
//     const formData = await request.formData()
//     const name = formData.get('name')
//     const email = formData.get('email')
//     console.log('The email and name are:', name, email)



// };
export default function AccountForm() {

    return (
        <div className="h-full overflow-hidden mx-auto gap-10 flex flex-col justify-center items-center">
            <h1>Please , Drop your name and email</h1>

            <Form method="post" className="gap-2 flex flex-col  ">

                <Input name="name" placeholder="Name"  className="mb-5  py-4" />
                <Input name='email' placeholder="Email"  className="mb-5" />
                <Button type='submit' variant='default' >Sign in </Button>

            </Form>
         

        </div>
    )
}