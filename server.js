const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const enforce = require('express-sslify');
const cron = require('cron').CronJob;

//Models declarations
const Quiz = require("./models/quiz");
const Question = require("./models/question");

//Routes declarations
const indexRouter = require("./routes/index");
const quizRouter = require("./routes/quizzes");
const questionRouter = require("./routes/questions");
const cors = require("cors");


// Config declarations
const port = process.env.PORT || 5000;
const ip = process.env.IP;
const db = process.env.DATABASEURL || "mongodb://localhost/knowrona";
const seedDB = require("./config/seed");
const environment = process.env.NODE_ENV || 'dev';


//Needed to make requests from front end to back end.
app.use(cors());

//mongoose connection
mongoose.connect(db, ({
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}))
  .then(() => { console.log("connected to: " + db) })
  .catch(err => { console.log(err.message); });;




// Special for Dev Environment
if (environment == 'dev') {
  require("dotenv").config();
  // Simulate loading 
  const slowness = process.env.SLOWNESS || 0;
  let loadTime = slowness * 1000 * Math.random()
  app.use((req, res, next) => {
    setTimeout(() => {
      loadTime = slowness * 1000 * Math.random();
      console.log("loaded")
      next();
    }, loadTime);
  })
  app.get("/", (req, res) => { res.send("This page shows in dev mode only"); });
}

// Regular DB clearance in Staging
if (environment == 'staging') {
  var job = new cron('0 0 20 * * *', function () {
    Quiz.deleteMany({}, (err, deletedQuizes) => {
      if (err) console.log(err);
      console.log('Scheduled deletion of quizzes')
    });
  }, null, true, 'America/Los_Angeles');
  job.start();
}


// Calling the seed function
seedDB();

// Creating routes shorthand
app.use(indexRouter);
app.use("/quiz", quizRouter);
app.use("/questions", questionRouter);

// Redirect to React in non Dev environment
if(environment !== 'dev'){
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join("client", "build")));
  app.get("*", (req, res) => { res.sendFile(path.resolve(__dirname, "client", "build", "index.html")); });
}

// Listening to the server
app.listen(port, ip, () => {
  console.log('Server running on port', port)
});