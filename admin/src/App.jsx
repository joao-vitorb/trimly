import React, { useContext } from "react";
import Login from "./pages/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import AllAppointments from "./pages/Admin/AllAppointments";
import AddBarber from "./pages/Admin/AddBarber";
import BarbersList from "./pages/Admin/BarbersList";
import { BarberContext } from "./context/BarberContext";
import BarberDashboard from "./pages/Barber/BarberDashboard";
import BarberAppointments from "./pages/Barber/BarberAppointments";
import BarberProfile from "./pages/Barber/BarberProfile";

const App = () => {
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(BarberContext);

  return aToken || dToken ? (
    <div className="bg-[#F8F9FD]">
      <ToastContainer />
      <Navbar />
      <div className="flex items-start">
        <Sidebar />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/all-appointments" element={<AllAppointments />} />
          <Route path="/add-barber" element={<AddBarber />} />
          <Route path="/barber-list" element={<BarbersList />} />

          <Route path="/barber-dashboard" element={<BarberDashboard />} />
          <Route path="/barber-appointments" element={<BarberAppointments />} />
          <Route path="/barber-profile" element={<BarberProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
