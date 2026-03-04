import React from 'react';
import { Helmet } from "react-helmet";

function Dashboard() {
  return (
    <div>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <h1>Dashboard</h1>
      <p>This is user dashboard</p>
    </div>
  );
}

export default Dashboard;