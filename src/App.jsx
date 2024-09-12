import { useState } from "react";
import "./App.css";
import FormInput from "./components/formInput";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex items-center justify-center bg-lighterGreen w-screen h-screen">
        <div className=" bg-white flex flex-col justify-center items-center p-6 rounded-xl">
          <form className="flex flex-col text-normal p-5 " action="">
            <span className="font-semibold text-[20px] pb-5">Contact Us</span>
            <div className="flex gap-4 ">
              <FormInput
                label={"First Name *"}
                type={"text"}
                placeholder={""}
                inputStyle={
                  "border border-mediumGrey rounded w-full h-9 active:border active:border-mediumGreen focus:border focus:border-mediumGreen focus:outline-none"
                }
                radioBorder={"pb-4"}
              />
              <FormInput
                label={"Last Name *"}
                type={"text"}
                placeholder={""}
                inputStyle={
                  "border border-mediumGrey rounded w-full h-9 active:border active:border-mediumGreen focus:border focus:border-mediumGreen focus:outline-none"
                }
                radioBorder={"pb-4"}
              />
            </div>
            <FormInput
              label={"Email Address *"}
              type={"text"}
              placeholder={""}
              inputStyle={
                "border border-mediumGrey rounded w-full h-9 active:border active:border-mediumGreen focus:border focus:border-mediumGreen focus:outline-none"
              }
              radioBorder={"pb-4"}
            />
            <div className="pb-4 flex flex-col gap-2">
              <span className=" text-[16px]">Query Type *</span>
              <div className="flex gap-4">
                <FormInput
                  label={"General Enquiry"}
                  type={"radio"}
                  placeholder={""}
                  inputStyle="active:bg-mediumGreen active:border-mediumGreen focus:border focus:border-mediumGreen focus:outline-none"
                  radioBorder={
                    "rounded border p-3 h-9 border-mediumGrey w-full text-nowrap items-center justify-end flex gap-2 flex-row-reverse "
                  }
                />
                <FormInput
                  label={"Support Request"}
                  type={"radio"}
                  radioBorder={
                    "rounded border p-3 h-9 border-mediumGrey w-full text-nowrap items-center justify-end flex gap-2 flex-row-reverse "
                  }
                />
              </div>
            </div>
            <div>
              <span className=" text-[16px]">Message *</span>
              <textarea
                className="border border-mediumGrey rounded w-full h-24 active:border active:border-mediumGreen focus:border focus:border-mediumGreen focus:outline-none"
                name="message"
                id=""
              ></textarea>
            </div>
            <div className="flex pb-8 gap-3 items-center">
              <FormInput label={""} type={"checkbox"} inputStyle="" />{" "}
              <span>I consent to being contacted by the team *</span>
            </div>
            <button className="flex bg-mediumGreen rounded h-9 text-white text-[16px] justify-center items-center">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
