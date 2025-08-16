import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/admin/Color';
import Household_ledger from './pages/household_ledger/Main';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/household_ledger" element={<Household_ledger />} />
      </Routes>
    </Router>
  );
}

export default App;
