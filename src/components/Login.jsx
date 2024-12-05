import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="bg-movie-fourth rounded-[20px] p-8 w-[20rem] md:w-[30rem] desktop:w-[40rem]">
      <h1 className="text-heading-l font-medium text-movie-fifth">Login</h1>
      <form className="flex flex-col gap-5">
        <input
          className="text-movie-fifth font-medium text-body-m bg-transparent border-b-2 border-movie-third border-l-0 border-r-0 border-t-0"
          placeholder="Email address"
        />
        <input
          className="text-movie-fifth font-medium text-body-m bg-transparent border-b-2 border-movie-third border-l-0 border-r-0 border-t-0"
          placeholder="Password"
        />
        <button className="text-movie-fifth bg-movie-primary rounded-[6px] pt-[14px] pb-[15px]">
          Login to your account
        </button>
        <div className="flex justify-center gap-[9px]">
          <span className="text-movie-fifth">Don&#39;t have an account?</span>
          <button className="text-movie-primary">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
