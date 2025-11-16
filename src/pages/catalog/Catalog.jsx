import React from "react";
import { Outlet } from "react-router-dom";
import PraductCard from "../../componets/praductCard/PraductCard";
import Sidebar from "../../componets/sidebar/Sidebar";

const Catalog = () => {
  return (
    <div className="flex gap-5">
      <div className="w-[280px]">
        <Sidebar />
      </div>

      <div className="flex-1">
        <PraductCard />
      </div>
    </div>
  );
};

export default Catalog;
