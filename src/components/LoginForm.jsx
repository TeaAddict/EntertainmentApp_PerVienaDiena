import { useForm } from "react-hook-form";
import { getUsers } from "../helpers/users/get";
import { Link, useNavigate } from "react-router";
import Button from "./Button";
import Cookies from "js-cookie";

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
      let userId;

      const isCorrect = res.some((user) => {
        if (user.email == data.email) {
          clearErrors("email");

          if (user.password == data.password) {
            clearErrors("password");
            userId = user.id;
            return true;
          }
        }
        setError("general", {
          type: "custom",
          message: "Incorrect credentials",
        });
        return false;
      });

      if (isCorrect) {
        Cookies.set("id", userId, { expires: 7 });
        navigate("/");
      } else console.log("wrong acc");
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
                onBlur: (e) => {
                  if (!e.target.value) {
                    setError("email", {
                      type: "manual",
                      message: "Can't be empty",
                    });
                  } else if (
                    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                      e.target.value
                    )
                  )
                    setError("email", {
                      type: "manual",
                      message: "Wrong email format",
                    });
                },
                required: "Can't be empty",
                onChange: () => clearErrors(["email", "general"]),
              })}
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
                onChange: () => clearErrors(["password", "general"]),
              })}
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

        {errors.general && (
          <p className="text-movie-primary text-nowrap">
            {errors.general.message}
          </p>
        )}

        <Button>Login to your account</Button>

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
