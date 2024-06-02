import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logged out successfully");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };
  return (
    <div>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-400 duration-200 cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
