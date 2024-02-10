
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import './App.css';
import Employee from './pages/Employee';
import Attendance from './pages/Attendance';
import Leave from './pages/Leave';
import Holiday from './pages/Holiday';
import Daily from './pages/Daily';
import Departments from './pages/Departments';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard/>}></Route>
          <Route exact path="/employee" element={<Employee/>}></Route>
          <Route exact path="/department" element ={<Departments/>}></Route>
          <Route exact path="/attendance" element={<Attendance/>}></Route>
          <Route exact path="/leave" element={<Leave/>}></Route>
          <Route exact path="/holiday" element={<Holiday/>}></Route>
          <Route exact path="/daily" element={<Daily/>}></Route>
          <Route exact path="/logout" element={<Dashboard/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
