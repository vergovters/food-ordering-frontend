import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <>
      <Link
        to="/order-status"
        className="flex bg-white items-center font-bold hover:text-blue-500"
      >
        Order Status
      </Link>
      <Link
        to="/manage-restaurant"
        className="flex bg-white items-center font-bold hover:text-blue-500"
      >
        My Restaurant
      </Link>
      <Link
        to="/user-profile"
        className="flex bg-white items-center font-bold hover:text-blue-500"
      >
        User Profile
      </Link>
      <button
        onClick={() => logout()}
        className="flex items-center px-3 font-bold hover:bg-gray-500 hover:text-white"
      >
        Log Out
      </button>
    </>
  );
};

export default MobileNavLinks;