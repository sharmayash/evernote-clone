import "./Layout.css";
import React from "react";
import SideNav from "./SideNav";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <SideNav />
      {children}
    </div>
  );
};

export default Layout;
