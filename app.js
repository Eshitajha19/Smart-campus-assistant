import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('http://127.0.0.1:5000/dashboard-data') 
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Campus Assistant Dashboard</h2>
      <p>Active Users: {data.active_users}</p>
      <p>Heatmap Status: {data.heatmap}</p>
      <p>Recommendations: {data.recommendations?.join(", ")}</p>
    </div>
  );
};

export default Dashboard;

