import { useState } from "react";

import Documents from "../pages/Documents";
import Home from "../pages/home";
import EmailAndInformation from "../pages/EmailAndInformation";
import Interviews from "../pages/Interviews";
import MyLeaves from "../pages/MyLeaves";
import ViewAttendence from "../pages/ViewAttendence";
import Sidebar from "./Sidebar";
import Header from "./Header";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import MyProfile from "../Profile/MyProfile";
import ChangePassword from "../Profile/ChangePassword";
import Ticket from "../Profile/Ticket";

const pagePaths: Record<string, string> = {
  home: "/",
  leaves: "/leaves",
  attendance: "/attendance",
  interviews: "/interviews",
  email: "/email",
  documents: "/documents",
  profile: "/profile",
  "change-password": "/change-password",
  ticket: "/ticket",
};

export default function MainLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const activePage =
    Object.entries(pagePaths).find(
      ([, path]) => path === location.pathname,
    )?.[0] ?? "home";
  const setActivePage = (page: string) => navigate(pagePaths[page] ?? "/");

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#f0f1f3]">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        collapsed={sidebarCollapsed}
      />
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <Header
          onMenuClick={() => setSidebarCollapsed((collapsed) => !collapsed)}
        />
        <main className="min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leaves" element={<MyLeaves />} />
            <Route path="/attendance" element={<ViewAttendence />} />
            <Route path="/interviews" element={<Interviews />} />
            <Route path="/email" element={<EmailAndInformation />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/ticket" element={<Ticket />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
