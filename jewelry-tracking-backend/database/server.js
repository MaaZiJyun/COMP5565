const express = require('express');
const cors = require("cors");
const { Certificate, AuditTrail, Ownership } = require('./models');

const app = express();

const PORT = 3001;

app.use(cors()); // Enable CORS for all requests
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests only from this origin
  })
);

app.get("/api/certificates", async (req, res) => {
  try {
    const certificates = await Certificate.findAll();
    if (certificates.length === 0) {
      return res.status(404).json({ message: "No certificates found." });
    }
    res.json(certificates);
  } catch (error) {
    console.error("Error fetching certificates:", error.message);
    res.status(500).json({ error: "Failed to fetch certificates" });
  }
});

app.get('/certificates/:id', async (req, res) => {
  const certificate = await Certificate.findByPk(req.params.id);
  res.json(certificate);
});

app.get('/certificates/:id/audit-trails', async (req, res) => {
  const auditTrails = await AuditTrail.findAll({ where: { certificateId: req.params.id } });
  res.json(auditTrails);
});

app.get('/certificates/:id/ownerships', async (req, res) => {
  const ownerships = await Ownership.findAll({ where: { certificateId: req.params.id } });
  res.json(ownerships);
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
