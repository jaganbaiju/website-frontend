// import  { React,useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import "./dashboard.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaEdit, FaTrash } from "react-icons/fa";

function Dashboard() {

  return (
    <div className='dashboard'>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <nav>
        <h1>Dashboard</h1>
      </nav>
      <hr />
  
      <a
        href="https://website-backend-api-sz6i.onrender.com/admin/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Admin Panel
      </a>
    </div>
  );
}

export default Dashboard;