import { OTPInput } from "input-otp";
import { useRef, useState } from "react";
import { FakeDash, Slot } from "./opt-form";
import { toast } from "sonner";
import { useTransition } from "react";
import { createAccount } from "../server/account.server";

export default function TestForm({otpcode , name , email}: {otpcode: number  , name: string  , email: string }) {

    const [val , setVal] = useState('')
    const [isPending , startTransition] = useTransition()
    
    const ref = useRef(null)
    const handleComp =  async (e) => {
        console.log('The props from entry : ' , name , email , otpcode)
        const match = parseInt(val) === otpcode
        const res = await createAccount({name: name , email:email , otp:otpcode})
        console.log('THe response is: ' , res)
             
        if(match){
            toast.success("Verified!")
        }else {
            toast.error("Incorrect OTP ,  please try again")
        }

    }
   
    return (
        <div className="mx-auto">
              <OTPInput
                onComplete={handleComp}
                maxLength={6}
                value={val}
                ref={ref}
                onChange={setVal}  
                containerClassName="group flex items-center has-[:disabled]:opacity-30"
                render={({ slots }) => (
                <>
                  <div className="flex">
                    {slots.slice(0, 3).map((slot, idx) => (
                      <Slot key={idx} {...slot} />
                    ))}
                  </div>

                  <FakeDash />

                  <div className="flex">
                    {slots.slice(3).map((slot, idx) => (
                      <Slot key={idx} {...slot} />
                    ))}
                  </div>
                </>
              )}
            />
        </div>
    )


}