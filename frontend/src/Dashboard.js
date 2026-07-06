import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const [deviceCount, setDeviceCount] = useState(0);

  useEffect(() => {
    fetchDevices();
  }, []);

  const fetchDevices = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/devices/"
      );

      setDeviceCount(response.data.length);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={styles.container}>

      <h1>Infrastructure Dashboard</h1>

      <div style={styles.cards}>

        <div style={styles.card}>
          <h2>Total Devices</h2>
          <p style={styles.number}>{deviceCount}</p>
        </div>

        <div style={styles.card}>
          <h2>API Status</h2>
          <p style={styles.status}>Healthy</p>
        </div>

      </div>

    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    backgroundColor: "#f1f5f9",
    minHeight: "100vh",
  },

  cards: {
    display: "flex",
    gap: "20px",
    marginTop: "30px",
  },

  card: {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "10px",
    width: "250px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },

  number: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#2563eb",
  },

  status: {
    fontSize: "24px",
    color: "green",
    fontWeight: "bold",
  },
};

export default Dashboard;