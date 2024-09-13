import { useForm } from "react-hook-form";
import "./App.css";
import FormInput from "./components/formInput"; // C

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Logs the form data
  };

  return (
    <>
      <div className="flex items-center justify-center bg-lighterGreen w-screen h-screen">
        <div className=" bg-white flex flex-col justify-center items-center p-6 rounded-xl">
          <form
            onSubmit={handleSubmit(onSubmit)} // onSubmit with handleSubmit
            className="flex flex-col text-normal p-5"
          >
            <span className="font-semibold text-[20px] pb-5">Contact Us</span>
            
            <div className="flex gap-4">
              {/* First Name */}
              <FormInput
                label={"First Name *"}
                type={"text"}
                placeholder={"First Name"}
                inputStyle={
                  "border border-mediumGrey rounded w-full h-9 active:border active:border-mediumGreen focus:border focus:border-mediumGreen focus:outline-none"
                }
                register={register}
                name="firstName"
                validation={{ required: "This field is required" }}
                errorMessage={errors?.firstName?.message}
              />

              {/* Last Name */}
              <FormInput
                label={"Last Name *"}
                type={"text"}
                placeholder={"Last Name"}
                inputStyle={
                  "border border-mediumGrey rounded w-full h-9 active:border active:border-mediumGreen focus:border focus:border-mediumGreen focus:outline-none"
                }
                register={register}
                name="lastName"
                validation={{ required: "This field is required" }}
                errorMessage={errors?.lastName?.message}
              />
            </div>

            {/* Email Address */}
            <FormInput
              label={"Email Address *"}
              type={"email"}
              placeholder={"Email"}
              inputStyle={
                "border border-mediumGrey rounded w-full h-9 active:border active:border-mediumGreen focus:border focus:border-mediumGreen focus:outline-none"
              }
              register={register}
              name="text"
              validation={{
                required: "This field is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              }}
              errorMessage={errors?.email?.message}
            />

            {/* Query Type */}
            <div className="pb-4 flex flex-col gap-2">
              <span className="text-[16px]">Query Type *</span>
              <div className="flex gap-4">
                <FormInput
                  label={"General Enquiry"}
                  type={"radio"}
                  register={register}
                  name="queryType"
                  value="general"
                  validation={{ required: "Please select a query type" }}
                  inputStyle="active:bg-mediumGreen active:border-mediumGreen focus:border focus:border-mediumGreen focus:outline-none"
                  radioBorder={
                    "rounded border p-3 h-9 border-mediumGrey w-full text-nowrap items-center justify-end flex gap-2 flex-row-reverse"
                  }
                />
                <FormInput
                  label={"Support Request"}
                  type={"radio"}
                  register={register}
                  name="queryType"
                  value="support"
                  validation={{ required: "Please select a query type" }}
                  radioBorder={
                    "rounded border p-3 h-9 border-mediumGrey w-full text-nowrap items-center justify-end flex gap-2 flex-row-reverse"
                  }
                />
              </div>
              {errors.queryType && (
                <p className="text-red-500">{errors.queryType?.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <span className="text-[16px]">Message *</span>
              <textarea
                className="border border-mediumGrey rounded w-full h-24 active:border active:border-mediumGreen focus:border focus:border-mediumGreen focus:outline-none"
                {...register("message", { required: "This field is required" })}
              ></textarea>
              {errors.message && (
                <p className="text-red-500">{errors.message?.message}</p>
              )}
            </div>

            {/* Consent Checkbox */}
            <div className="flex pb-8 gap-3 items-center">
              <input
                type="checkbox"
                {...register("consent", { required: "You must consent to continue" })}
              />
              <span>I consent to being contacted by the team *</span>
              {errors.consent && (
                <p className="text-red-500">{errors.consent?.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="flex bg-mediumGreen rounded h-9 text-white text-[16px] justify-center items-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
