import { useAuth0 } from "@auth0/auth0-react";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";

const MainNav = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0()

    return(
        <span className="flex space-x-7 items-center font-body text-xl">
            {isAuthenticated ? 
            <>
                <Link to="/order-status">Order Status</Link>
                <UsernameMenu/>
            </>
            : 
            <button className="fond-bold hover:text-blue-500 hover:bg-white" onClick={async () => loginWithRedirect()}>
                Log In
            </button>}
        </span>
      
    )
}

export default MainNav;