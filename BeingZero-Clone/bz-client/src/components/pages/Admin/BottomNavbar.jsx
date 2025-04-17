import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const BottomNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Users", path: "/admin/users" },
    { label: "Problems", path: "/admin/problems" },
    { label: "Submissions", path: "/admin/submissions" },
    { label: "Blogs", path: "/admin/blogs" },
  ];

  return (
    <div className="fixed bottom-10 w-[90%] bg-black/50 py-2 px-4 rounded-xl flex space-x-4 items-center border border-white/50 backdrop-blur-md">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`w-full px-2 py-2 rounded-lg my-2 border ${
              isActive
                ? "bg-white text-black font-semibold"
                : "border-white/40 hover:bg-gray-700 text-white"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

export default BottomNavbar;
