import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import PraductCard from "../praductCard/PraductCard";
const Layout = () => {
  return (
    <>
      <Header />
      <main className="p-4">
        <Outlet>
          <div className="container max-w-[1240px] mx-auto">
            <PraductCard />
          </div>
        </Outlet>
      </main>
    </>
  );
};

export default Layout;
