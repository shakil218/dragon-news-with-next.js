import logo from "@/assets/logo.png";
import { format } from "date-fns";
import Image from "next/image";
const Header = () => {
  return (
    <div className="text-center text-xl font-medium text-gray-600 my-10 space-y-2">
      <Image src={logo} alt="Logo" width={500} height={350} className="mx-auto" />
      <p>Journalism Without Fear or Favour</p>
      <p>{format(new Date(), "MMMM,EEEE dd,yyyy")}</p>
    </div>
  );
};

export default Header;