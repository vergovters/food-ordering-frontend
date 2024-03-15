import { Navigate, Route, Routes } from "react-router-dom";
import Layot from "./layout/layot";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Layot showHero><HomePage/></Layot>}/>
            <Route path="/auth-callback" element={<AuthCallbackPage/>}/>
            <Route element={<ProtectedRoute/>}>
                <Route path="/user-profile" element={<Layot><UserProfilePage/></Layot>}/>
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRoutes;