import { useForm } from "react-hook-form";
import { getUsers } from "../helpers/users/get";
import { Link, useNavigate } from "react-router";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();

  const handleFormSubmit = async (data) => {
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
        return correct;
      });

      if (isCorrect) navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-movie-fourth  rounded-[20px] p-[1.5rem] pb-[2rem] md:p-[2rem] w-[20.4375rem] md:w-[25rem]">
      <h1 className="text-heading-l font-medium text-movie-fifth mb-[2.5rem] tracking-[-0.5px] leading-[40px]">
        Login
      </h1>
      <form
        className="flex flex-col"
        noValidate
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="flex flex-col gap-[1.5rem]">
          <div
            className={`flex border-b-[1px] ${
              errors.email ? "border-movie-primary" : "border-movie-third"
            }  has-[:focus]:border-movie-fifth`}
          >
            <input
              {...register("email", {
                required: "Can't be empty",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Wrong email format",
                },
              })}
              onFocus={() => clearErrors("email")}
              className="text-movie-fifth focus:ring-0 w-full font-medium text-body-m bg-transparent border-none pb-[1.06rem] pt-0 pl-[1rem] leading-[19px]"
              placeholder="Email address"
            />
            {errors.email && (
              <p className="text-movie-primary text-nowrap">
                {errors.email.message}
              </p>
            )}
          </div>
          <div
            className={`flex border-b-[1px] ${
              errors.password ? "border-movie-primary" : "border-movie-third"
            } has-[:focus]:border-movie-fifth`}
          >
            <input
              {...register("password", {
                required: "Can't be empty",
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
                  message: "Password needs special characters",
                },
              })}
              onFocus={() => clearErrors("password")}
              type="password"
              className="text-movie-fifth focus:ring-0 w-full font-medium text-body-m bg-transparent border-none pb-[1.06rem] pt-0 pl-[1rem] leading-[19px]"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-movie-primary text-nowrap">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>

        <button className="text-movie-fifth hover:text-movie-secondary text-body-m font-medium mt-[2.5rem] mb-[1.5rem] bg-movie-primary hover:bg-movie-fifth rounded-[6px] h-[3rem]">
          Login to your account
        </button>

        <div className="flex justify-center gap-[8px]">
          <span className="text-movie-fifth text-body-m font-medium leading-[19px]">
            Don&#39;t have an account?
          </span>
          <Link
            to="/register"
            className="text-movie-primary text-body-m font-medium leading-[19px]"
          >
            <button>Sign Up</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
