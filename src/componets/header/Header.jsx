import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEllipsisV,
  faListUl,
  faSearch,   
  faUser,
  faHeart,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("uz");
  const navigete = useNavigate();
  const handleCatalogClick = () => {
    navigete("/catalog");
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <header className="header flex flex-col items-center">
      <div className="w-full bg-gray-100 text-sm text-gray-700 border-b">
        <div className="wropper max-w-[1240px] mx-auto px-4">
          <div className="container mx-auto flex justify-between items-center px-4 py-2">
            <div className="flex items-center gap-4 flex-wrap">
              <p className="flex items-center gap-1">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-purple-600"
                />
                <span>Shahar:</span>
                <Link
                  to="/city"
                  className="underline hover:text-purple-600 transition"
                >
                  Toshkent
                </Link>
              </p>
              <Link
                to="/pickup-points"
                className="hover:text-purple-600 transition"
              >
                Topshirish punktlari
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-5">
              <Link
                to="/sell-on-uzum"
                className="text-purple-600 font-medium hover:underline"
              >
                Uzumda soting
              </Link>
              <Link to="/faq" className="hover:text-purple-600 transition">
                Savol-javoblar
              </Link>
              <Link
                to="/my-orders"
                className="hover:text-purple-600 transition"
              >
                Buyurtmalarim
              </Link>

              <div className="hover:text-purple-600 transition flex items-center gap-1">
                <select
                  id="languageSelect"
                  value={selectedLanguage}
                  onChange={handleLanguageChange}
                  className="appearance-none bg-white border border-gray-300 rounded-md pl-10 pr-8 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 cursor-pointer"
                >
                  <option value="uz">O‘zbekcha</option>
                  <option value="ru">Русский</option>
                  <option value="en">English</option>
                </select>
              </div>
            </div>

            <button id="topMenuBtn" className="md:hidden text-xl text-gray-700">
              <FontAwesomeIcon icon={faEllipsisV} />
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4 max-w-[1240px]">
        <Link to="/" className="flex items-center space-x-1 min-w-max">
          <div className="h-6 w-6 rounded-full bg-uzum-purple flex items-center justify-center"></div>
          <img src={Logo} alt="Uzum Market" />
        </Link>

        <button
          className="flex items-center cursor-pointer justify-center bg-uzum-light-purple text-uzum-purple font-semibold py-2 px-4 rounded-lg min-w-[120px] hover:bg-uzum-light-purple/80 transition duration-150 mr-4 hidden md:flex"
          onClick={handleCatalogClick}
        >
          <FontAwesomeIcon icon={faListUl} className="mr-2" />
          Katalog
        </button>

        <div className="flex flex-1 max-w-xl border border-uzum-light-purple rounded-lg overflow-hidden order-3 md:order-none">
          <input
            type="text"
            placeholder="Mahsulotlar va turkumlar izlash"
            className="w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-0"
          />
          <button className="bg-search-bg px-4 text-gray-600 hover:bg-gray-200 transition duration-150">
            <FontAwesomeIcon icon={faSearch} className="text-lg" />
          </button>
        </div>

        <nav className="flex items-center space-x-6 text-sm min-w-max hidden sm:flex">
          <Link to="/login" className="action-item flex flex-col items-center">
            <FontAwesomeIcon icon={faUser} className="text-xl" />
            <span className="mt-1">Kirish</span>
          </Link>
          <Link
            to="/favorites"
            className="action-item flex flex-col items-center"
          >
            <FontAwesomeIcon icon={faHeart} className="text-xl" />
            <span className="mt-1">Saralangan</span>
          </Link>
          <Link to="/cart" className="action-item flex flex-col items-center">
            <FontAwesomeIcon icon={faShoppingBag} className="text-xl" />
            <span className="mt-1">Savat</span>
          </Link>
        </nav>

        <nav className="flex items-center space-x-4 text-sm min-w-max sm:hidden">
          <Link to="/login" className="text-gray-700 hover:text-blue-600">
            <FontAwesomeIcon icon={faUser} className="text-xl" />
          </Link>
          <Link to="/cart" className="text-gray-700 hover:text-blue-600">
            <FontAwesomeIcon icon={faShoppingBag} className="text-xl" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
