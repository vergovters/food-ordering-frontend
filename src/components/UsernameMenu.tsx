import { useAuth0 } from "@auth0/auth0-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";

const UsernameMenu = () => {
    const {user, logout} = useAuth0()
    return(
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-start px-3 font-bold hover:text-blue-500 gap-2"> 
                <CircleUserRound className="text-blue-500"/>
                {user?.email}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link to="/user-profile" className="font-bold hover:text-blue-500">Profile</Link>
                </DropdownMenuItem>
                <Separator/>
                <DropdownMenuItem>
                    <button className="flex flex-1 font-bold bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700" onClick={async () => logout()}>Log Out</button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UsernameMenu;