import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import Employee from "./pages/Employee";
import Attendance from "./pages/Attendance";
import Leave from "./pages/Leave";
import Holiday from "./pages/Holiday";
import Daily from "./pages/Daily";
import Departments from "./pages/Departments";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/inventory" element={<Employee />}></Route>
          <Route exact path="/issued" element={<Departments />}></Route>
          <Route exact path="/received" element={<Attendance />}></Route>
          <Route exact path="/supplier" element={<Leave />}></Route>
          <Route exact path="/returns" element={<Holiday />}></Route>
          <Route exact path="/expired" element={<Daily />}></Route>
          <Route exact path="/logout" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
