import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<span>Works</span>}/>
            <Route path="/user-profile" element={<span>profile</span>}/>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AppRoutes;