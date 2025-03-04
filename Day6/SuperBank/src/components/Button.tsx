interface IButtonProps {
  text: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ text, handleClick }: IButtonProps) => {
  return (
    <button
      className="px-4 py-2 font-bold text-white bg-blue-400 cursor-pointer rounded-md"
      onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
