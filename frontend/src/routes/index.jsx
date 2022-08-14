import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Login, Main } from '../pages';

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default MyRoutes;
