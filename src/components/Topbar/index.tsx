import { Link, useNavigate } from "react-router-dom";

interface TopBarProps {
  title: String;
  skip: String;
}

export const TopBar = ({ title, skip }: TopBarProps) => {
  const navigate = useNavigate();
  const place = skip ? "justify-between" : "";
  const center = title ? "place-content-center" : "";
  const position = title ? "absolute" : "";
  const leftAngle = `${
    import.meta.env.VITE_PUBLIC_URL
  }/src/assets/leftAngle.png`;

  return (
    <div className={`relative flex py-3 mb-3 ${place} ${center}`}>
      <img
        src={leftAngle}
        className={`w-6 left-0 ${position}`}
        onClick={() => navigate(-1)}
      />
      <p className="font-semibold">{title}</p>
      {skip ? (
        <Link to={`${skip}`} className="text-main-color mt-1">
          건너뛰기
        </Link>
      ) : null}
    </div>
  );
};
