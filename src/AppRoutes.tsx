import { Navigate, Route, Routes } from "react-router-dom";
import Layot from "./layout/layot";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Layot showHero><HomePage/></Layot>}/>
            <Route path="/auth-callback" element={<AuthCallbackPage/>}/>
            <Route path="/user-profile" element={<Layot><UserProfilePage/></Layot>}/>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRoutes;