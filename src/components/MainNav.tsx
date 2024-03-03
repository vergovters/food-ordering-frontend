import { useAuth0 } from "@auth0/auth0-react";
import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0()

    return(
        <span className="flex space-x-2 items-center">
            {isAuthenticated ? 
            <UsernameMenu/>
            : 
            <button className="fond-bold hover:text-blue-500 hover:bg-white" onClick={async () => loginWithRedirect()}>
                Log In
            </button>}
        </span>
      
    )
}

export default MainNav;