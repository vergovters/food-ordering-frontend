import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import pan from "../assets/pan.jpg"

export default function Header() {
  return (
    <div className="py-6">
        <div className="container flex justify-between items-center">
            <Link className="text-2xl font-bold font-serif tracking-tight flex flex-col items-center text-black" to="/">
                <img src={pan} alt="" className="w-[35px] mb-[-5px]" />
                GastroHeaven
            </Link>
            <div className="md:hidden">
              <MobileNav/>
            </div>
            <div className="hidden md:block">
              <MainNav/>
            </div>
            <button className="bg-[#F54748] text-white py-3 px-6 rounded-[32px] hidden md:block transform hover:translate-y-[-3px] transition-all duration-300">
              Download App
            </button>
        </div>
    </div>
  )
}
