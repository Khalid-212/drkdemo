const express = require("express");
const app = express();
const port = 3000;

// Define the JSON data
const data = {
  name: "Hanan keder",
  passcode: "403535",
  status: "Active",
};

// Define the endpoint
app.get("/data/:passcode", (req, res) => {
  const { passcode } = req.params;
  if (passcode === data.passcode) {
    res.json(data);
  } else {
    res.status(404).json({ message: "Passcode not found" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
