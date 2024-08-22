import { Link, useNavigate } from "react-router-dom";

interface TopBarProps {
  title: String;
  skip: String;
}

export const TopBar = ({ title, skip }: TopBarProps) => {
  const navigate = useNavigate();
  const place = skip ? "justify-between" : "space-x-16";
  const leftAngle = `${
    import.meta.env.VITE_PUBLIC_URL
  }/src/assets/leftAngle.png`;

  return (
    <div className={`flex py-3 mb-3 ${place}`}>
      <img src={leftAngle} className="w-6" onClick={() => navigate(-1)} />
      <p className="text-lg font-semibold">{title}</p>
      {skip ? (
        <Link to={`${skip}`} className="text-main-color mt-1">
          건너뛰기
        </Link>
      ) : null}
    </div>
  );
};
