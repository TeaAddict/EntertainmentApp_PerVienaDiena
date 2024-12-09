const Button = ({ children }) => {

  return (
    <button className="text-movie-fifth hover:text-movie-secondary text-body-m font-medium mt-[2.5rem] mb-[1.5rem] bg-movie-primary hover:bg-movie-fifth rounded-[6px] h-[3rem] px-4">
      {children}
    </button>
  );
};

export default Button;
