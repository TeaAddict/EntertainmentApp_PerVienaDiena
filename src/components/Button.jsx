const Button = ({
  children,
  onClick,
  type = "button",
  styleType = "primary",
  size = "medium",
}) => {
  const sizes = {
    medium: "h-[3rem] px-4",
    small: "h-[2rem] px-2",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-movie-fifth hover:text-movie-secondary text-body-m font-medium w-full text-nowrap ${
        styleType == "primary"
          ? "bg-movie-primary"
          : styleType == "secondary"
          ? "bg-movie-third"
          : "bg-movie-third text-movie-fifth"
      } hover:bg-movie-fifth rounded-[6px] ${sizes[size]}`}
    >
      {children}
    </button>
  );
};

export default Button;
