const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route test pour vérifier que le serveur tourne
app.get("/", (req, res) => {
  res.send("✅ Backend is running!");
});

// Route Twilio - reçoit les appels
app.post("/incoming-call", (req, res) => {
  const twiml = `
    <Response>
      <Say voice="alice">Bonjour, votre bot est bien en ligne !</Say>
    </Response>
  `;
  res.type("text/xml");
  res.send(twiml);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
