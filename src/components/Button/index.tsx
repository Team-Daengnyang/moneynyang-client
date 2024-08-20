import { Link } from "react-router-dom";

interface ButtonProps {
  text: String;
  link: String;
}

export const Button = ({ text, link }: ButtonProps) => {
  const bgColor = "bg-main-color";

  return (
    <Link
      to={`${link}`}
      className={`py-4 my-5 ${bgColor} text-center text-white font-medium block rounded-lg`}
    >
      {text}
    </Link>
  );
};
