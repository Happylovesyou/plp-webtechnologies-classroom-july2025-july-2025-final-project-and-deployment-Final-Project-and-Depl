const express = require("express");
const router = express.Router();
const Report = require("../models/Report");

// Submit a report
router.post("/", async (req, res) => {
  try {
    const { name, location, issue } = req.body;

    const report = new Report({ name, location, issue });
    await report.save();

    res.json({ message: "Report submitted successfully", report });
  } catch (error) {
    res.status(500).json({ message: "Error submitting report", error });
  }
});

// Get all reports (admin)
router.get("/", async (req, res) => {
  try {
    const reports = await Report.find().sort({ date: -1 });
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reports", error });
  }
});

module.exports = router;
