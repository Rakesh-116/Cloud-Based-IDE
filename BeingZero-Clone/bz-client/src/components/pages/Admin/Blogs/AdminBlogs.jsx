import React from "react";

import Header from "../../Header";
import BottomNavbar from "../BottomNavbar";

const AdminBlogs = () => {
  return (
    <div className="bg-black/95 min-h-screen">
      <Header />
      <div className="mt-28 px-10">
        <BottomNavbar />
      </div>
    </div>
  );
};

export default AdminBlogs;
