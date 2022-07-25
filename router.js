const express = require("express");
const app = express();

const xlsx = require("xlsx");

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

app.post("/excel", (req, res) => {
  let data = null;
  try {
    data = JSON.parse(req.body);
  } catch (e) {
    if (e instanceof TypeError) {
    } else {
      console.error(e);
    }
  }
  const book = xlsx.utils.book_new();
  const hihi = xlsx.utils.json_to_sheet(data);
});

app.listen((port = 52538), () => {
  console.log(`server started, port: ${port}`);
});
