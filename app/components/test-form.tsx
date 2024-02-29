import { OTPInput } from "input-otp";
import { useRef, useState } from "react";
import { FakeDash, Slot } from "./opt-form";
import { toast } from "sonner";

export default function TestForm({otpcode}: {otpcode: number | undefined}) {
   console.log('THE OTP: ' , otpcode)
    const [val , setVal] = useState('')
    const ref = useRef(null)
    const handleComp = (e) => {
        const match = parseInt(val) === otpcode
        console.log('I am completed is: ' , val)
        if(match){

            return toast.success("Verified!")
        }else {
            return toast.error("Incorrect OTP ,please try again later")
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