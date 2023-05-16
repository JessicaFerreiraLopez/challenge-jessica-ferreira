import closeIcon from "../../assets/img/activo.png";

interface ButtonProps {
  onClick: () => void;
  text?: string;
  isDisabled?: boolean;
  classes?: string;
  img?: string;
  imgClasses?: string;
  includeArrow?: boolean;
}

function Button({
  onClick,
  text = "button",
  isDisabled,
  classes = "",
  img,
  imgClasses,
  includeArrow,
}: ButtonProps) {
  return (
    <button
      className={`flex items-center justify-between rounded-md border-inherit  ${classes}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {img ? <img className={imgClasses} alt="button img" src={img} /> : text}
      {includeArrow && (
        <img
          className="h-7 -rotate-90 px-1 py-1"
          alt="button img"
          src={closeIcon}
        />
      )}
    </button>
  );
}

export default Button;
