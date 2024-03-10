import { useCreateMyUser } from "@/api/UserApi";
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import { Navigate, useNavigate } from "react-router-dom";

type Props = {
    children: React.ReactNode
}

const Auth0ProviderNav = ({children}: Props) => {
    const navigate = useNavigate()
    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

    if(!domain || !clientId || !redirectUri){
        throw new Error("enable auth0")
    }

    const onRedirectCallback = (appState?: AppState, user?: User) => {
        navigate("/auth-callback")
    }

    return(
        <Auth0Provider 
            domain={domain} 
            clientId={clientId} 
            authorizationParams={{
                redirect_uri: redirectUri,
            }}
            onRedirectCallback={onRedirectCallback}        
        >
            {children}
        </Auth0Provider>
    )
}

export default Auth0ProviderNav;