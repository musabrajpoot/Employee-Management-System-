// Tip: If you don't have lucide-react installed, you can replace these with your own SVG icons or string icons
import {
  Home,
  Eye,
  Search,
  EyeOff,
  ChevronDown,
  UserRound,
  BriefcaseBusiness,
  Info,
  Ticket,
  LogOut,
} from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  collapsed: boolean;
}

export default function Sidebar({
  activePage,
  setActivePage,
  collapsed,
}: SidebarProps) {
  const [isopen, setIsOpen] = useState(false);

  // Categorized navigation data to cleanly match your image grouping
  const menuGroups = [
    {
      title: "PERSONAL",
      items: [
        { id: "home", label: "Home", icon: Home },
        { id: "leaves", label: "My Leaves", icon: UserRound },
      ],
    },
    {
      title: "ATTENDANCE",
      items: [
        { id: "attendance", label: "View Attendance", icon: Eye },
        { id: "interviews", label: "Interviews", icon: BriefcaseBusiness },
      ],
    },
    {
      title: "INFORMATION",
      items: [
        { id: "email", label: "Email & Information", icon: Info },
        { id: "documents", label: "Documents", icon: BriefcaseBusiness },
      ],
    },
  ];

  const UsernameDropdown = [
    {
      items: [{ id: "profile", label: "Profile", icon: UserRound }],
    },
    {
      items: [
        { id: "change-password", label: "Change Password", icon: EyeOff },
      ],
    },
    {
      items: [
        { id: "ticket", label: "My Tickets", icon: Ticket },
      ],
    },
    {
      items: [{ id: "logout", label: "Logout", icon: LogOut }],
    },
  ];
  const handleItemClick = (id: string) => {
    setActivePage(id); // Your existing page state setter
    setIsOpen(false); // Closes the menu after clicking
  };

  return (
    <aside
      className={`z-20 flex h-full shrink-0 flex-col overflow-y-auto border-r border-gray-200 bg-white select-none transition-[width] duration-200 ${collapsed ? "w-[68px]" : "w-[220px]"}`}
    >
      {/* Top Sidebar branding - Matches your top-left Logo block */}
      <div
        className={`flex h-14 shrink-0 items-center border-b border-gray-100 ${collapsed ? "justify-center px-2" : "gap-3 px-3"}`}
      >
        <div className="flex h-9 w-9 shrink-0 flex-col items-center justify-center rounded-sm border border-cyan-500 text-[7px] font-bold leading-[9px] text-cyan-600">
          <span>MIKRO</span>
          <span>STAR</span>
          <span>TECH</span>
        </div>
        {!collapsed && (
          <h1 className="whitespace-nowrap text-[14px] font-bold text-gray-700">
            MikroStarTech
          </h1>
        )}
      </div>

      {!collapsed && (
        <>
          <div className="mt-3 flex flex-col items-center px-4">
            <div className="mb-1 flex h-[52px] w-[52px] items-center justify-center overflow-hidden rounded-full bg-[#dce9f8] text-[#42495d]">
              <UserRound className="h-8 w-8" strokeWidth={1.7} />
            </div>
              <div className="relative inline-block text-left">
                <button
                  onClick={() => setIsOpen(!isopen)}
                  className="flex items-center text-xs text-gray-600 transition-colors hover:text-gray-900 focus:outline-none"
                >
                  BilawalAli
                  <ChevronDown
                    className={`ml-0.5 h-3 w-3 transition-transform ${isopen ? "rotate-180" : ""}`}
                  />
                  
                </button>
                {isopen && (
                  <div className="ProfileDropdown absolute z-50 w-96 rounded-md bg-white focus:outline-none">
                    <div className="" >
                      {UsernameDropdown.map((group) => (
                        <div
                          className="space-y-0.5 border-b border-gray-50 last:border-0 pb-1.5 last:pb-0">
                          {group.items.map((item) => {
                            const IconComponent = item.icon;
                            return (
                              <button
                                key={item.id}
                                onClick={() => handleItemClick(item.id)}
                                className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-[12px] text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors "
                              >
                                <IconComponent className="h-3.5 w-3.5 shrink-0 text-gray-400" />
                                <span>{item.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      ))}
                      <p className="text-[10px] text-gray-400 px-2 py-1.5 text-right mr-16">Version 1.0.0</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

          <div className="relative mx-[10px] mt-4">
            <input
              type="search"
              placeholder="Search"
              aria-label="Search navigation"
              className="h-8 w-full rounded-full border border-gray-300 bg-white px-3 pr-8 text-xs text-gray-700 outline-none placeholder:text-gray-400 focus:border-cyan-500"
            />
            <Search className="pointer-events-none absolute right-2.5 top-2 h-4 w-4 text-gray-400" />
          </div>
        </>
      )}

      {/* Grouped Sidebar Navigation Buttons */}
      <div className={`flex-1 space-y-5 py-6 ${collapsed ? "px-2" : "px-2.5"}`}>
        {menuGroups.map((group) => (
          <div key={group.title} className="space-y-0.5">
            {/* Header category label */}
            {!collapsed && (
              <h3 className="mb-2 px-1 text-[10px] font-bold text-gray-400">
                {group.title}
              </h3>
            )}

            {group.items.map((item) => {
              const IconComponent = item.icon;
              const isActive = activePage === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  title={collapsed ? item.label : undefined}
                  className={`flex h-9 w-full items-center rounded-md text-[12px] font-medium transition-colors duration-150 ${collapsed ? "justify-center px-0" : "gap-3 px-1"} ${
                    isActive
                      ? "text-[#ff876e]"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-800"
                  }`}
                >
                  <IconComponent
                    className={`h-4 w-4 shrink-0 ${isActive ? "text-[#ff876e]" : "text-gray-400"}`}
                  />
                  {!collapsed && (
                    <span className="whitespace-nowrap">{item.label}</span>
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </aside>
  );
}
