import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Login, Main, Register } from '../pages';

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/main" element={<Main />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default MyRoutes;
