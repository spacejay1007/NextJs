import { MainProfile } from "components/main/about/MainProfile";
import Image from "next/image";

type T_Children = {
  children: React.ReactNode;
};

const aboutLayout = ({ children }: T_Children) => {
  return (
    <div className="w-full justify-center flex flex-col items-center">
      <MainProfile />
      {children}
    </div>
  );
};

export default aboutLayout;
