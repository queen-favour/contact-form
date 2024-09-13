import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center bg-lighterGreen w-screen h-screen">
      <div className="bg-white flex flex-col justify-center items-center p-6 rounded-xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col text-normal p-5"
        >
          <span className="font-semibold text-[20px] pb-5">Contact Us</span>

          <div className="flex gap-4">
            {/* First Name */}
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="firstName" className="font-semibold">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                className={`border py-3 rounded-lg px-3 ${
                  errors.firstName ? "border-red" : "border-mediumGrey"
                } focus:border-mediumGreen focus:outline-none hover:border-mediumGreen`}
                {...register("firstName", {
                  required: "This field is required",
                })}
              />
              {errors.firstName && (
                <span className="text-red">
                  {errors.firstName?.message}
                </span>
              )}
            </div>

            {/* Last Name */}
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="lastName" className="font-semibold">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                className={`border py-3 rounded-lg px-3 ${
                  errors.lastName ? "border-red" : "border-mediumGrey"
                } focus:border-mediumGreen focus:outline-none hover:border-mediumGreen`}
                {...register("lastName", {
                  required: "This field is required",
                })}
              />
              {errors.lastName && (
                <span className="text-red">{errors.lastName?.message}</span>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1 pt-4">
            <label htmlFor="email" className="font-semibold">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              className={`border py-3 rounded-lg px-3 ${
                errors.email ? "border-red" : "border-mediumGrey"
              } focus:border-mediumGreen focus:outline-none hover:border-mediumGreen`}
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-red">{errors.email?.message}</span>
            )}
          </div>

          {/* Query Type */}
          <div className="flex flex-col gap-1 pt-4">
            <label className="font-semibold">Query Type *</label>
            <div className="flex gap-4">
              <label
                className={`flex items-center border w-full p-2 rounded-lg cursor-pointer ${
                  errors.queryType
                    ? "border-red"
                    : "border-mediumGrey hover:border-mediumGreen focus-within:border-mediumGreen"
                }`}
              >
                <input
                  type="radio"
                  className="mr-2"
                  {...register("queryType", {
                    required: "Please select a query type",
                  })}
                  value="general"
                />
                General Enquiry
              </label>
              <label
                className={`flex items-center border w-full p-2 rounded-lg cursor-pointer ${
                  errors.queryType
                    ? "border-red"
                    : "border-mediumGrey hover:border-mediumGreen focus-within:border-mediumGreen"
                }`}
              >
                <input
                  type="radio"
                  className="mr-2"
                  {...register("queryType", {
                    required: "Please select a query type",
                  })}
                  value="support"
                />
                Support Request
              </label>
            </div>
            {errors.queryType && (
              <span className="text-red">{errors.queryType?.message}</span>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1 pt-4">
            <label htmlFor="message" className="font-semibold">
              Message *
            </label>
            <textarea
              id="message"
              className={`border rounded-lg px-3 py-3 h-24 ${
                errors.message ? "border-red" : "border-mediumGrey"
              } focus:border-mediumGreen focus:outline-none hover:border-mediumGreen`}
              {...register("message", { required: "This field is required" })}
            />
            {errors.message && (
              <span className="text-red">{errors.message?.message}</span>
            )}
          </div>

          {/* Consent */}
          <div className="flex gap-2 items-center pt-4">
            <input
              type="checkbox"
              className={`accent-green-500 scale-125 ${
                errors.consent ? "border-red" : ""
              } focus:outline-none focus:ring focus:ring-mediumGreen`}
              {...register("consent", {
                required: "You must consent to continue",
              })}
            />
            <span className="font-semibold">
              I consent to being contacted by the team *
            </span>
          </div>
          {errors.consent && (
            <span className="text-red">{errors.consent?.message}</span>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 bg-mediumGreen text-white rounded-lg py-3 hover:bg-green-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;