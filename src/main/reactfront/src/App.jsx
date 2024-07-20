import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Common/user/Login';
import Register from './pages/Common/user/Register';
import UserList from './pages/admin/user/UserList';
import FadList from './pages/foodroad/fad/FadList';
import InquiryWrite from './pages/inquiry/InquiryWrite';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/fad" element={<FadList />} />
        <Route path="/inquiryWrite" element={<InquiryWrite />} />
      </Routes>
    </Router>
  );
}

export default App;
