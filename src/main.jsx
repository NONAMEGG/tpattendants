import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AttendantsList from './attendantsList';
import AddAttendantForm from './attendantForm';
import './index.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <nav>
        <ul>
          <li><Link to="/">View Attendants</Link></li>
          <li><Link to="/add">Add Attendant</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<AttendantsList />} />
        <Route path="/add" element={<AddAttendantForm />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

