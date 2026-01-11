import { Route, Routes } from "react-router";
import Dashboard from "../components/sbo-admin/Dashboard";

const SboAdmin = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Routes>
        <Route path="/sbo-admin/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default SboAdmin;