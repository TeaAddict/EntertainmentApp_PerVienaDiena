import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="h-[100vh] bg-movie-secondary px-[1.5em] py-[3rem] md:py-[5.5rem] desktop:py-[4.9rem]">
      <div className="flex flex-col items-center">
        <img
          src="/src/assets/logo.svg"
          className="w-[2rem] h-[1.6rem] mb-[3.65rem] md:mb-[4.52rem] desktop:mb-[5.19rem] justify-self-center"
        />
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
