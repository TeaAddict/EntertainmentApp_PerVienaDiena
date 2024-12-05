import Login from "../components/Login";

const LoginPage = () => {
  return (
    <div className="h-[100vh] bg-movie-secondary px-[1.5em] py-[3rem]">
      <img
        src="/src/assets/logo.svg"
        className="w-[2rem] h-1.6rem] mb-[3.65rem] justify-self-center "
      />
      <Login />
    </div>
  );
};

export default LoginPage;
