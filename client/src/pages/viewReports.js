import React, { useEffect, useState } from "react";

const ViewReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/report")
      .then(res => res.json())
      .then(data => setReports(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Submitted Reports (Admin View)</h2>

      {reports.map((item) => (
        <div key={item._id} style={{
          background: "#f1f1f1",
          padding: "15px",
          marginBottom: "10px",
          borderRadius: "5px"
        }}>
          <p><strong>Name:</strong> {item.name}</p>
          <p><strong>Location:</strong> {item.location}</p>
          <p><strong>Issue:</strong> {item.issue}</p>
          <p><strong>Date:</strong> {new Date(item.date).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewReports;