import React, { useState } from "react";
import PraductCard from "../../componets/praductCard/PraductCard";
import Sidebar from "../../componets/sidebar/Sidebar";

const Catalog = () => {
  const [filter, setFilter] = useState({
    categories: [],
    colors: [],
    brands: [],
    countries: [],
    price: [5000, 56000000],
  });

  return (
    <div className="flex gap-5">
      <div className="w-[280px]">
        <Sidebar filter={filter} setFilter={setFilter} />
      </div>

      <div className="flex-1">
        <PraductCard filter={filter} />
      </div>
    </div>
  );
};

export default Catalog;
