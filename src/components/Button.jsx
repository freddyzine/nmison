export const ContainedButton = ({
  text,
  style,
  onClick,
  className,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      style={style}
      disabled={disabled}
      className={
        "px-4 py-3 rounded-md text-white bg-primary font-poppins text-sm " +
        className
      }
    >
      {text}
    </button>
  );
};

export const OutlinedButton = ({
  text,
  style,
  onClick,
  className,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      style={style}
      disabled={disabled}
      className={
        "px-4 py-3 rounded-md text-primary border border-solid border-primary font-poppins text-sm " +
        className
      }
    >
      {text}
    </button>
  );
};
