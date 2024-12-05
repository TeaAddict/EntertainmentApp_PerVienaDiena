import { useForm } from "react-hook-form";
import { getUsers } from "../helpers/users/get";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: {
      email: "asd@c.com",
      password: "@DMmasdams232",
    },
  });

  const handleFormSubmit = async (data) => {
    console.log(data);
    try {
      const res = await getUsers();
      console.log(res);
      const isCorrect = res.some((user) => {
        let correct = true;
        if (user.email != data.email) {
          setError("email", { type: "custom", message: "Incorrect email" });
          correct = false;
        }
        if (user.password != data.password) {
          setError("password", {
            type: "custom",
            message: "Incorrect password",
          });
          correct = false;
        }
        console.log(correct);
        return correct;
      });

      if (isCorrect) {
        console.log("Correct credentials!");
      } else {
        console.log("Incorrect credentials!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-movie-fourth rounded-[20px] p-[1.5rem]">
      <h1 className="text-heading-l font-medium text-movie-fifth mb-[2.5rem]">
        Login
      </h1>
      <form
        className="flex flex-col"
        noValidate
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div
          className={`flex border-b-[1px] mb-[1.5rem] ${
            errors.email ? "border-movie-primary" : "border-movie-third"
          }`}
        >
          <input
            {...register("email", {
              required: "Can't be empty",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Wrong email format",
              },
            })}
            className="text-movie-fifth focus:ring-0 w-full font-medium text-body-m bg-transparent border-none"
            placeholder="Email address"
          />
          {errors.email && (
            <p className="text-movie-primary">{errors.email.message}</p>
          )}
        </div>
        <div
          className={`flex border-b-[1px] ${
            errors.password ? "border-movie-primary" : "border-movie-third"
          }`}
        >
          <input
            {...register("password", {
              required: "Can't be empty",
              pattern: {
                value: /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
                message: "Password must contain special characters",
              },
            })}
            className="text-movie-fifth focus:ring-0 w-full font-medium text-body-m bg-transparent border-none"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-movie-primary">{errors.password.message}</p>
          )}
        </div>
        <button className="text-movie-fifth text-body-m font-medium mt-[2.5rem] mb-[1.5rem] bg-movie-primary rounded-[6px] h-[3rem]">
          Login to your account
        </button>
        <div className="flex justify-center gap-[0.5625rem]">
          <span className="text-movie-fifth text-body-m">
            Don&#39;t have an account?
          </span>
          <button className="text-movie-primary text-body-m">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
