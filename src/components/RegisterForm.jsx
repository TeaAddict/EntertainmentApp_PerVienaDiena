import { useForm } from "react-hook-form";
import { getUsers } from "../helpers/users/get";
import { Link, useNavigate } from "react-router";
import { postUser } from "../helpers/users/post";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    watch,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      repeatPass: "",
    },
  });

  const navigate = useNavigate();

  const handleFormSubmit = async (data) => {
    console.log(data);
    try {
      const res = await getUsers();
      console.log(res);
      const isCorrect = res.some((user) => {
        let correct = true;
        if (user.email == data.email) {
          setError("email", {
            type: "custom",
            message: "Email already exists",
          });
          correct = false;
        }

        return correct;
      });

      if (isCorrect) {
        console.log("Correct credentials!");
        await postUser({ email: data.email, password: data.password });
        navigate("/");
      } else {
        console.log("Incorrect credentials!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const currentPass = watch("password");

  console.log(errors);
  return (
    <div className="bg-movie-fourth  rounded-[20px] p-[1.5rem] pb-[2rem] md:p-[2rem] w-[20.4375rem] md:w-[25rem]">
      <h1 className="text-heading-l font-medium text-movie-fifth mb-[2.5rem] tracking-[-0.5px] leading-[40px]">
        Sign Up
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
             
              className="caret-movie-primary text-movie-fifth focus:ring-0 w-full font-medium text-body-m bg-transparent border-none pb-[1.06rem] pt-0 pl-[1rem] leading-[19px]"
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
              type="password"
              className="caret-movie-primary text-movie-fifth focus:ring-0 w-full font-medium text-body-m bg-transparent border-none pb-[1.06rem] pt-0 pl-[1rem] leading-[19px]"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-movie-primary text-nowrap">
                {errors.password.message}
              </p>
            )}
          </div>

          <div
            className={`flex border-b-[1px] ${
              errors.password ? "border-movie-primary" : "border-movie-third"
            } has-[:focus]:border-movie-fifth`}
          >
            <input
              {...register("repeatPass", {
                required: "Can't be empty",
              })}
              type="password"
              className="text-movie-fifth focus:ring-0 w-full font-medium text-body-m bg-transparent border-none pb-[1.06rem] pt-0 pl-[1rem] leading-[19px]"
              placeholder="Repeat Password"
              onBlur={(e) => {
                if (e.target.value !== currentPass)
                  setError("repeatPass", {
                    type: "manual",
                    message: "Passwords must match",
                  });
              }}
            />
            {errors.repeatPass && (
              <p className="text-movie-primary text-nowrap">
                {errors.repeatPass.message}
              </p>
            )}
          </div>
        </div>

        <button className="text-movie-fifth hover:text-movie-secondary text-body-m font-medium mt-[2.5rem] md:mt-[1.5rem] mb-[1.5rem] bg-movie-primary hover:bg-movie-fifth rounded-[6px] h-[3rem]">
          Create an account
        </button>

        <div className="flex justify-center gap-[8px]">
          <span className="text-movie-fifth text-body-m font-medium leading-[19px]">
            Already have an account?
          </span>
          <Link
            to="/login"
            className="text-movie-primary text-body-m font-medium leading-[19px]"
          >
            <button>Login</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
