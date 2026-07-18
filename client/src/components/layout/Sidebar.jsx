import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import ConfidentialModal from "../ui/ConfidentialModal";
import {
  LayoutDashboard,
  Users,
  UserRoundCog,
  CalendarDays,
  Receipt,
  Pill,
  Boxes,
  FlaskConical,
  BarChart3,
  FileText,
  Settings,
  LogOut,
  HeartPulse,
  Lock,
} from "lucide-react";

const [modalOpen, setModalOpen] = useState(false);
const [selectedModule, setSelectedModule] = useState("");
const menu = [
  {
    title: "MAIN",
    items: [
      {
        name: "Dashboard",
        icon: LayoutDashboard,
        path: "/",
        locked: false,
      },
      {
        name: "Patients",
        icon: Users,
        path: "/patients",
        locked: false,
      },
      {
        name: "Doctors",
        icon: UserRoundCog,
        path: "/doctors",
        locked: true,
      },
      {
        name: "Appointments",
        icon: CalendarDays,
        path: "/appointments",
        locked: true,
      },
    ],
  },
  {
    title: "MANAGEMENT",
    items: [
      {
        name: "Billing",
        icon: Receipt,
        path: "/billing",
        locked: true,
      },
      {
        name: "Pharmacy",
        icon: Pill,
        path: "/pharmacy",
        locked: true,
      },
      {
        name: "Inventory",
        icon: Boxes,
        path: "/inventory",
        locked: true,
      },
      {
        name: "Laboratory",
        icon: FlaskConical,
        path: "/laboratory",
        locked: true,
      },
    ],
  },
  {
    title: "REPORTS",
    items: [
      {
        name: "Analytics",
        icon: BarChart3,
        path: "/analytics",
        locked: true,
      },
      {
        name: "Reports",
        icon: FileText,
        path: "/reports",
        locked: true,
      },
    ],
  },
];

function Sidebar() {
  const showLockedMessage = () => {
    toast("🔒 Confidential module. Available in a future release.");
  };

  return (
    <aside className="w-72 h-screen sticky top-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col transition-all duration-300">

      {/* Logo */}

      <div className="h-24 flex items-center px-8 border-b border-slate-200 dark:border-slate-800">

        <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg">

          <HeartPulse
            size={30}
            className="text-white"
          />

        </div>

        <div className="ml-4">

          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
            GG Hospitals
          </h1>

          <p className="text-sm text-slate-500">
            Hospital ERP
          </p>

        </div>

      </div>

      {/* Navigation */}

      <div className="flex-1 overflow-y-auto px-5 py-6">

        {menu.map((section) => (

          <div
            key={section.title}
            className="mb-8"
          >

            <h2 className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-4 px-3">

              {section.title}

            </h2>

            <div className="space-y-1">

              {section.items.map((item) => {

                const Icon = item.icon;

                if (item.locked) {
                  return (
                    <button
                      key={item.name}
                      onClick={() => {
  setSelectedModule(item.name);
  setModalOpen(true);
}}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-400 dark:text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                    >
                      <div className="flex items-center gap-4">
                        <Icon size={20} />
                        <span>{item.name}</span>
                      </div>

                      <Lock size={16} />
                    </button>
                  );
                }

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 ${
                        isActive
                          ? "bg-blue-600 text-white shadow-lg"
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`
                    }
                  >
                    <Icon size={20} />

                    <span className="font-medium">

                      {item.name}

                    </span>

                  </NavLink>
                );

              })}

            </div>

          </div>

        ))}

      </div>

      {/* Footer */}

      <div className="border-t border-slate-200 dark:border-slate-800 p-5">

        <div className="flex items-center gap-3 mb-5">

          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">

            A

          </div>

          <div>

            <h3 className="font-semibold text-slate-800 dark:text-white">

              Administrator

            </h3>

            <p className="text-sm text-slate-500">

              GG Hospitals

            </p>

          </div>

        </div>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition text-slate-700 dark:text-slate-300 mb-2">

          <Settings size={18} />

          Settings

        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition">

          <LogOut size={18} />

          Logout

        </button>

      </div>
      <ConfidentialModal
  isOpen={modalOpen}
  moduleName={selectedModule}
  onClose={() => setModalOpen(false)}
/>
    </aside>
  );
}

export default Sidebar;