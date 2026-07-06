import React, { useState, useEffect } from "react";
import axios from "axios";

function Devices() {

  const [devices, setDevices] = useState([]);

  const [formData, setFormData] = useState({
    device_name: "",
    device_ip: "",
    device_type: "",
  });

  useEffect(() => {
  fetchDevices();
 }, []);

  // Handle input changes
  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
   });
 };

  // Submit device to backend
  const addDevice = async () => {
    try {
      await axios.post(
        "http://127.0.0.1:8000/api/devices/",
        formData
      );

      alert("Device Added Successfully");

    } catch (error) {
      console.log(error.response.data);
      alert(JSON.stringify(error.response.data));
    }
  };

  // Fetch devices from backend
  const fetchDevices = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/devices/"
      );

      setDevices(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "40px" }}>

      <h1>Devices Management</h1>

      {/* Form */}
      <div style={styles.form}>

        <input
            type="text"
            name="device_name"
            placeholder="Device Name"
            onChange={handleChange}
            style={styles.input}
        />

        <input
            type="text"
            name="device_type"
            placeholder="Device Type"
            onChange={handleChange}
            style={styles.input}
        />

        <input
            type="text"
            name="device_ip"
            placeholder="Device Host/IP"
            onChange={handleChange}
            style={styles.input}
        />

        <button onClick={addDevice} style={styles.button}>
          Add Device
        </button>

      </div>

      {/* Fetch Button */}  

      {/* Devices Table */}
      <table border="1" cellPadding="10" style={styles.table}>
        <thead>
          <tr>
            <th>Device Name</th>
            <th>Device Type</th>
            <th>Host/IP</th>
          </tr>
        </thead>

        <tbody>
          {devices.map((device, index) => (
            <tr key={index}>
                <td>{device.device_name}</td>
                <td>{device.device_type}</td>
                <td>{device.device_ip}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

const styles = {
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
    flexWrap: "wrap",
  },

  input: {
    padding: "10px",
    width: "200px",
  },

  button: {
    padding: "10px 20px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    cursor: "pointer",
  },

  fetchButton: {
    padding: "10px 20px",
    marginBottom: "20px",
    backgroundColor: "#0f172a",
    color: "white",
    border: "none",
    cursor: "pointer",
  },

  table: {
    width: "100%",
    backgroundColor: "white",
  },
};

export default Devices;