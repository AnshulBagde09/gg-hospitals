import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";

import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";

// Temporary placeholders
function Doctors() {
  return <div className="text-2xl font-bold">Doctors</div>;
}

function Appointments() {
  return <div className="text-2xl font-bold">Appointments</div>;
}

function Billing() {
  return <div className="text-2xl font-bold">Billing</div>;
}

function Pharmacy() {
  return <div className="text-2xl font-bold">Pharmacy</div>;
}

function Inventory() {
  return <div className="text-2xl font-bold">Inventory</div>;
}

function Laboratory() {
  return <div className="text-2xl font-bold">Laboratory</div>;
}

function Analytics() {
  return <div className="text-2xl font-bold">Analytics</div>;
}

function Reports() {
  return <div className="text-2xl font-bold">Reports</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/patients"
            element={<Patients />}
          />

          <Route
            path="/doctors"
            element={<Doctors />}
          />

          <Route
            path="/appointments"
            element={<Appointments />}
          />

          <Route
            path="/billing"
            element={<Billing />}
          />

          <Route
            path="/pharmacy"
            element={<Pharmacy />}
          />

          <Route
            path="/inventory"
            element={<Inventory />}
          />

          <Route
            path="/laboratory"
            element={<Laboratory />}
          />

          <Route
            path="/analytics"
            element={<Analytics />}
          />

          <Route
            path="/reports"
            element={<Reports />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;