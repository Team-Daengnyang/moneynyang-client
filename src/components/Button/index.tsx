interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export const Button = ({ text, onClick }: ButtonProps) => {
  const bgColor = "bg-main-color";

  return (
    <button
      onClick={onClick}
      className={`py-4 my-5 ${bgColor} text-center text-white font-medium block rounded-lg`}
    >
      {text}
    </button>
  );
};
