import React, { useState } from "react";

const ReportIssue = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [issue, setIssue] = useState("");
  const [message, setMessage] = useState("");

  const submitReport = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/report", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, location, issue })
    });

    const data = await response.json();
    setMessage(data.message);

    setName("");
    setLocation("");
    setIssue("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Report a Community Issue</h2>

      {message && <p style={{ color: "green" }}>{message}</p>}

      <form onSubmit={submitReport} style={{ display: "flex", flexDirection: "column", width: "300px" }}>
        <input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />

        <input placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />

        <textarea placeholder="Describe the issue" value={issue} onChange={(e) => setIssue(e.target.value)} required />

        <button style={{ marginTop: "10px", padding: "10px", background: "#0B3D91", color: "white" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReportIssue;