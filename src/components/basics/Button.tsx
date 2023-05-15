interface ButtonProps {
  onClick: () => void;
  text?: string;
  isDisabled?: boolean;
  classes?: string;
  img?: string;
  imgClasses?: string; //improve  text or image logic
}

function Button({
  onClick,
  text = "button",
  isDisabled,
  classes = "",
  img,
  imgClasses,
}: ButtonProps) {
  return (
    <button
      className={`rounded-md border-inherit bg-white ${classes}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {img ? <img className={imgClasses} alt="button img" src={img} /> : text}
    </button>
  );
}

export default Button;
