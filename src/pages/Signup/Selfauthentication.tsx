import { TopBar } from "../../components/Topbar";

export const Selfauthentication = () => {
  return (
    <div className="h-full pt-6 px-4 bg-white text-center">
      <TopBar title={""} skip={true} />
      <p>계좌를 등록해 주세요.</p>
    </div>
  );
};
