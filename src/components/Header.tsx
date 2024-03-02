import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <div className="border-b-2 border-b-blue-500 py-6">
        <div className="container mx-auto flex justify-between items-center">
            <Link className="text-3xl font-bold tracking-tight text-blue-500" to="/">
                    GastroHaven
            </Link>
            <div className="md:hidden">
              <MobileNav/>
            </div>
        </div>
    </div>
  )
}
