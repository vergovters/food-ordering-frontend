import { useAuth0 } from "@auth0/auth0-react";

const MainNav = () => {
    const {loginWithRedirect} = useAuth0()

    return(
        <button className="fond-bold hover:text-blue-500 hover:bg-white" onClick={async () => loginWithRedirect()}>
            Log In
        </button>
    )
}

export default MainNav;