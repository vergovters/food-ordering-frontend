import { Navigate, Route, Routes } from "react-router-dom";
import Layot from "./layout/layot";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Layot><HomePage/></Layot>}/>
            <Route path="/auth-callback" element={<AuthCallbackPage/>}/>
            <Route path="/user-profile" element={<span>profile</span>}/>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRoutes;