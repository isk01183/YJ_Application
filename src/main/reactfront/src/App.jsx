import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/admin/Color';
import Login from './pages/Common/user/Login';
import Register from './pages/Common/user/Register';
import HouseholdLedger from './pages/household_ledger/Main';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/householdLedger" element={<HouseholdLedger />} />
      </Routes>
    </Router>
  );
}

export default App;
