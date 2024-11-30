import React, { useContext, createContext, useState, useEffect } from "react";
import { HiHome } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { FaUserShield } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ChevronLast, ChevronFirst } from "lucide-react";

import invoiceIcon from "./invoice.png";
import patient from "./patient.png";
import reg from "./registration.png";
import monitor from "./monitor.png";
import techsupport from "./technical-support.png";
import insurance from "./healthcare.png";
import queue from "./queue.png";
import appo from "./appointment-book.png";
import hospital from "./hospital.png";

const SidebarContext = createContext();

export default function Sidebar({ children, isDarkMode }) {
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setExpanded(false);
      } else {
        setExpanded(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen">
      <aside
        className={`h-full flex flex-col transition-all duration-300 ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        }`}
      >
        <nav className="flex flex-col flex-1 border-r shadow-sm">
          {/* Header Section */}
          <div className="p-4 pb-2 flex justify-between items-center">
            <img
              src={hospital} 
              className={`overflow-hidden transition-all ${
                expanded ? "w-8" : "w-0"
              }`}
              alt="Hospital Logo"
              style={{
                filter: isDarkMode ? "invert(1) brightness(1)" : "none",
              }}
            />
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className={`p-1.5 rounded-lg ${
                isDarkMode
                  ? "bg-gray-700 hover:bg-gray-600"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>

          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3 overflow-y-auto">
              <SidebarItem
                icon={<HiHome size={20} />}
                text="Home"
                route="/home"
                isDarkMode={isDarkMode}
              />
              <SidebarItem
                icon={<MdOutlineDashboard size={20} />}
                text="Dashboard"
                route="/dashboard"
                isDarkMode={isDarkMode}
              />
              <SidebarItem
                icon={
                  <img
                    src={reg}
                    alt="Registration Icon"
                    className="w-5 h-5"
                    style={{
                      filter: isDarkMode ? "invert(1) brightness(1.2)" : "none",
                    }}
                  />
                }
                text="Registration"
                route="/registration"
                isDarkMode={isDarkMode}
              />
              <SidebarItem
                icon={
                  <img
                    src={appo}
                    alt="Registration Icon"
                    className="w-5 h-5"
                    style={{
                      filter: isDarkMode ? "invert(1) brightness(1.2)" : "none",
                    }}
                  />
                }
                text="Appointment"
                route="/appointment"
                isDarkMode={isDarkMode}
              />
              <SidebarItem
                icon={
                  <img
                    src={patient}
                    alt="Patient Icon"
                    className="w-5 h-5"
                    style={{
                      filter: isDarkMode ? "invert(1) brightness(1.2)" : "none",
                    }}
                  />
                }
                text="Patient"
                route="/patient"
                isDarkMode={isDarkMode}
              />
              <SidebarItem
                icon={
                  <img
                    src={invoiceIcon}
                    alt="Billing Icon"
                    className="w-5 h-5"
                    style={{
                      filter: isDarkMode ? "invert(1) brightness(1.2)" : "none",
                    }}
                  />
                }
                text="Billing"
                route="/billing"
                isDarkMode={isDarkMode}
              />
              <SidebarItem
                icon={
                  <img
                    src={queue}
                    alt="Queue Icon"
                    className="w-5 h-5"
                    style={{
                      filter: isDarkMode ? "invert(1) brightness(1.2)" : "none",
                    }}
                  />
                }
                text="Queue"
                route="/queue"
                isDarkMode={isDarkMode}
              />
              <SidebarItem
                icon={
                  <img
                    src={insurance}
                    alt="Insurance Icon"
                    className="w-5 h-5"
                    style={{
                      filter: isDarkMode ? "invert(1) brightness(1.2)" : "none",
                    }}
                  />
                }
                text="Insurance"
                route="/insurance"
                isDarkMode={isDarkMode}
              />
              <SidebarItem
                icon={
                  <img
                    src={monitor}
                    alt="Reporting Icon"
                    className="w-5 h-5"
                    style={{
                      filter: isDarkMode ? "invert(1) brightness(1.2)" : "none",
                    }}
                  />
                }
                text="Reporting"
                route="/reporting"
                isDarkMode={isDarkMode}
              />
              <SidebarItem
                icon={
                  <img
                    src={techsupport}
                    alt="Tools Icon"
                    className="w-5 h-5"
                    style={{
                      filter: isDarkMode ? "invert(1) brightness(1.2)" : "none",
                    }}
                  />
                }
                text="Tools"
                route="/tools"
                isDarkMode={isDarkMode}
              />
            </ul>
          </SidebarContext.Provider>

          <div className={`border-t flex p-3 mt-auto`}>
            <FaUserShield size={40} className="text-gray-500" />
            <div
              className={`flex justify-between items-center overflow-hidden transition-all ${
                expanded ? "w-52 ml-3" : "w-0"
              }`}
            >
              <div className="leading-4">
                <h4 className="font-semibold">Admin</h4>
              </div>
            </div>
          </div>
        </nav>
      </aside>

      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}

export function SidebarItem({ icon, text, route, active, isDarkMode }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <Link to={route}>
      <li
        className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
          active
            ? isDarkMode
              ? "bg-gray-700 text-indigo-300"
              : "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : isDarkMode
            ? "hover:bg-gray-700 text-gray-300"
            : "hover:bg-indigo-50 text-gray-600"
        }`}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
      </li>
    </Link>
  );
}
