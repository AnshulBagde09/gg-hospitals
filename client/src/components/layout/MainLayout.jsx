import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">

      <div className="flex">

        {/* Sidebar */}

        <Sidebar />

        {/* Main Content */}

        <div className="flex-1 flex flex-col min-h-screen">

          {/* Navbar */}

          <Navbar />

          {/* Page Content */}

          <main className="flex-1 p-6 lg:p-8 overflow-x-hidden">

            <Outlet />

          </main>

        </div>

      </div>

    </div>
  );
}

export default MainLayout;