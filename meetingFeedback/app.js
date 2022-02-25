const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

let meetings = [];

app.use("/", express.static("public"));

app.use(express.urlencoded());
app.get("/meeting", function (req, res) {
  console.log("Starting a meeting", req.query.meetingId, meetings);
  if (meetings.find((e) => e.id === parseInt(req.query.meetingId))) {
    // Participant
    console.log("Logged as participant");
    res.send({ status: false });
  } else {
    // Presenter
    meetings.push({ id: parseInt(req.query.meetingId), up: 0, down: 0 });
    console.log("Logged as presenter");
    res.send({ status: true });
  }
});

app.use(bodyParser.json());
app.post("/feedback", function (req, res) {
  console.log("Got a POST /feedback request", req.body, meetings);
  const meeting = meetings.find((e) => e.id === parseInt(req.body.meetingId));
  console.log("Meeting found", meeting);
  if (req.body.feedback === "up") {
    meeting.up = meeting.up + 1;
  } else if (req.body.feedback === "down") {
    meeting.down = meeting.down + 1;
  }
  console.log("New meetings values", meetings);
  res.sendStatus(200);
});

app.get("/feedback", function (req, res) {
  console.log("Got a GET /feedback request", req.query, meetings);
  const meeting = meetings.find((e) => e.id === parseInt(req.query.meetingId));
  console.log("Meeting found", meeting);
  res.send(meeting);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
