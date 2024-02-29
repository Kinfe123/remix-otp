import { OTPInput } from "input-otp";
import { useRef, useState } from "react";
import { FakeDash, Slot } from "./opt-form";

export default function TestForm() {
    const [val ,setVal] = useState('')
    const ref = useRef(null)
    const handleComp = (e) => {
        console.log('I am completed is: ' , val)

    }
   
    return (
        <div>
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