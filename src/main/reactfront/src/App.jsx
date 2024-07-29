import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Common/user/Login';
import Register from './pages/Common/user/Register';
import FadList from './pages/foodroad/fad/FadList';
import InquiryWrite from './pages/inquiry/InquiryWrite';
import Admin from './pages/admin/Color';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/fad" element={<FadList />} />
        <Route path="/inquiryWrite" element={<InquiryWrite />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
