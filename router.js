const express = require("express");
const app = express();

app.use("/public", express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/test", (req, res) => {
  res.sendFile(__dirname + "/test.html");
});
app.get("/patient-list", (req, res) => {
  res.sendFile(__dirname + "/patient-list.html");
});
app.get("/patient-reg", (req, res) => {
  res.sendFile(__dirname + "/patient-reg.html");
});
app.get("/patient-detail", (req, res) => {
  res.sendFile(__dirname + "/patient-detail.html");
});

app.listen((port = 52538), () => {
  console.log(`server started, port: ${port}`);
});
