import React, { useState, useEffect } from 'react';
import { FaList, FaTachometerAlt, FaBars, FaTimes } from 'react-icons/fa';
import Link from "next/link";

const Sidebar: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton((prevActiveButton) => {
      if (prevActiveButton === buttonName) {
        return null; 
      } else {
        return buttonName; 
      }
    });
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const closeSidebar = () => {
    if (isMobile && !isSidebarCollapsed) {
      setIsSidebarCollapsed(true);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`flex h-screen ${isMobile ? 'md:h-auto' : ''}`}>
      {isMobile && (
        <button
          className="md:hidden absolute top-4 left-0 bg-custom-color text-white rounded-full p-2"
          onClick={toggleSidebar}
        >
          {isSidebarCollapsed ? (
            <FaBars className="h-6 w-6 text-green-900 ml-3 transition-all duration-300" />
          ) : (
            <FaTimes className="h-6 w-6 text-green-900 transition-all duration-300" />
          )}
        </button>
      )}
      <div
        className={` w-1/9 bg-green-100 text- flex flex-col md:flex-col ${
          isMobile && isSidebarCollapsed ? 'md:flex-col md:w-20' : ''
        }`}
      >
        <div className="p-4 mt-4 flex items-center">
          <div className="relative ">
            <img
              src="./images/image-removebg-preview.png"
              alt="Logo"
              className={`logo object-contain h-40 ml-10 ${
                isSidebarCollapsed ? 'md:w-10 md:h-15vh' : ''
              }`}
            />
          </div>
        </div>
        <ul className={`p-2 ${isSidebarCollapsed ? 'hidden' : ''}`}>
  <li
    className={`flex py-4 text-green-700 font-bold ml-10 hover:bg-green-500 hover:text-white hover:rounded-lg hover:px-2 transition-all duration-600 cursor-pointer items-center ${
      activeButton === 'dashboard' ? 'active-button' : ''
    }`}
    onClick={() => handleButtonClick('dashboard')}
  >
    <Link href="/homePage">
      <div
        className={`text-green-500 mr-2 ${
          isSidebarCollapsed ? 'md:w-20 md:h-20' : ''
        }`}
      >
        <div className="flex">
          <FaTachometerAlt className="mt-1" />
          <span className="text-green-900 capitalize text-xl ml-1">
            DASHBOARD
          </span>
        </div>
      </div>
    </Link>
  </li>
  <li
    className={`flex mt-6 py-4 text-green-700 font-bold ml-10 hover:bg-green-500 hover:text-white hover:rounded-lg hover:px-2 transition-all duration-600 cursor-pointer items-center ${
      activeButton === 'systemLists' ? 'active-button' : ''
    }`}
    onClick={() => handleButtonClick('systemLists')}
  >
    <Link href="/systemLists">
      <div
        className={`text-green-500 mr-2 ${
          isSidebarCollapsed ? 'md:w-20 md:h-20' : ''
        } ${
          activeButton === 'systemLists' ? 'active-text' : ''
        }`} 
      >
        <div className="flex">
          <FaList className="mt-1" />
          <span className=" text-green-900 active:text-white capitalize text-xl ml-1">
            SYSTEM LIST
          </span>
        </div>
      </div>
    </Link>
  </li>
</ul>

<div className="flex-grow"></div>
<div className="p-4"></div>
<style>
  {`
  .active-button {
    background-color: #22C55E;
    color: white;
    border-radius: 6px;
    text-color:white;
  }

  .button 
  
  {
    color:white;

  }

  .active-text {
    color: white;
  }


  `}
</style>


      </div>
      <div
        className={`flex-grow bg-white ${
          isMobile && isSidebarCollapsed ? 'md:w-60' : ''
        }`}
        onClick={closeSidebar}
      ></div>
    </div>
  );
}

export default Sidebar;
