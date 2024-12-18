const Button = ({
  children,
  onClick,
  type = "button",
  styleType = "primary",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-movie-fifth hover:text-movie-secondary text-body-m font-medium mt-[2.5rem] mb-[1.5rem] ${
        styleType == "primary"
          ? "bg-movie-primary"
          : styleType == "secondary"
          ? "bg-movie-third"
          : "bg-movie-third text-movie-fifth"
      } hover:bg-movie-fifth rounded-[6px] h-[3rem] px-4`}
    >
      {children}
    </button>
  );
};

export default Button;
