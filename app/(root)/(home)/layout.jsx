import React from "react";
import Navbar from "../../../components/Navbar";
const HomeLayout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <div className="p-5">{children}</div>
    </main>
  );
};

export default HomeLayout;
