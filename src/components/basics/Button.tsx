interface ButtonProps {
  onClick?: () => void;
  text: string;
  isDisabled?: boolean;
  classes?: string;
}

function Button({ onClick, text, isDisabled, classes = "" }: ButtonProps) {
  return (
    <button className="" onClick={onClick} disabled={isDisabled}>
      {text}
    </button>
  );
}

export default Button;
