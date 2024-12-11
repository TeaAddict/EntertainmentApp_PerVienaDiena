const Button = ({ children, onClick, type = "primary" }) => {
  return (
    <button
      onClick={onClick}
      className={`text-movie-fifth hover:text-movie-secondary text-body-m font-medium mt-[2.5rem] mb-[1.5rem] ${
        type == "primary" ? "bg-movie-primary" : "bg-movie-third"
      } hover:bg-movie-fifth rounded-[6px] h-[3rem] px-4`}
    >
      {children}
    </button>
  );
};

export default Button;
