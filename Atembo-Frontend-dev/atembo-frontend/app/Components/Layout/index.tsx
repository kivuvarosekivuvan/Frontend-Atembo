'use client'
import React, { ReactNode } from "react";
import Sidebar from "../Sidebar";

interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-white-100">
      <Sidebar/>
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-white-200 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};
export default Layout;