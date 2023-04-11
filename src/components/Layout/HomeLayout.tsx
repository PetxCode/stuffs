import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../Static";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
