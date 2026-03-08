import  { React,useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import "./dashboard.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Dashboard() {

  const [title, setTitle] = useState("Hero Page");
  const [data, setData] = useState([]);
  const [heroData, setHeroData] = useState([]);

  return (
    <div className='dashboard'>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <h1>Dashboard</h1>

    </div>
  );
}

export default Dashboard;