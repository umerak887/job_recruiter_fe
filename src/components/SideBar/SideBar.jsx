import React, { createContext, useContext, useEffect, useState } from "react";
import { LuChevronFirst, LuChevronLast, LuMoreVertical } from "react-icons/lu";
import { useSelector, useDispatch } from "react-redux";
import { setExpanded } from "./store";
import { CiLogout } from "react-icons/ci";
import { login, logout, storeUserData } from "../../modules/Auth/store";
import { useNavigate } from "react-router-dom";

const sidebarContext = createContext();
const SideBar = ({ children }) => {
  // const [expanded, setExpanded] = useState(true);
  const expanded = useSelector((state) => state.sidebarReducer.expanded);
  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <aside className="h-full">
      <nav className="h-screen flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <h1
            className={`overflow-hidden transition-all duration-300 font-bold text-xl ${
              expanded ? " w-44" : "w-0"
            } `}
          >
            Hello!!
          </h1>
          <button
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
            onClick={() => dispatch(setExpanded())}
          >
            {expanded ? <LuChevronFirst /> : <LuChevronLast />}
          </button>
        </div>
        <ul className="flex-1 px-3 overflow-y-auto overflow-x-hidden">
          {children}
        </ul>
        <div className="border-t flex p-3">
          <h1 className="w-10 h-10 rounded-md bg-indigo-200 text-indigo-800 flex justify-center items-center text-xl font-bol">
            {userData.name[0]}
          </h1>
          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">{userData.name}</h4>
              <span className="text-xs text-gray-600">{userData.email}</span>
            </div>
            <CiLogout
              size={50}
              className="hover:bg-red-600 p-2 hover:text-white rounded-md cursor-pointer"
              onClick={() => {
                dispatch(logout());
                navigate("/auth/sign_in");
              }}
            />
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
export { sidebarContext };
