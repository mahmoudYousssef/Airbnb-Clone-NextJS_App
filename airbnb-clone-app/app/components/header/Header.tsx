import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/Airbnb_Logo.svg";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import "../../globals.css";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 container bg-white shadow-md py-5 ">
      <div className="px-4 mx-auto w-full grid grid-cols-3  justify-between">
        <Link href="/" className=" relative flex items-center h-10 my-auto">
          <Image 
            src={Logo}
            alt="Logo-img"
            fill
            className="object-contain object-left"
          />
        </Link>
        <SearchBar />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
