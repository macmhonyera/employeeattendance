import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import Login from "./pages/Login";
import Product from "./pages/Product/Product";
import Supplier from "./pages/Suppliers/Suppliers";
import ReturnedProducts from "./pages/ReturnedStock/ReturnedProducts";
import ExpiredStock from "./pages/Product/ExpiredStock";
import Issue from "./pages/Issued/IssueStock";
import { ToastProvider } from "react-toast-notifications";

function App() {
  return (
    <div>
      <Router>
        <ToastProvider
          autoDismissTimeout={5000}
          placement="top-left"
          autoDismiss
        >
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/inventory" element={<Product />} />
            <Route exact path="/issued" element={<Issue />} />
            <Route exact path="/supplier" element={<Supplier />} />
            <Route exact path="/returns" element={<ReturnedProducts />} />
            <Route exact path="/expired" element={<ExpiredStock />} />
            <Route exact path="/logout" element={<Login />} />
          </Routes>
        </ToastProvider>
      </Router>
    </div>
  );
}

export default App;
