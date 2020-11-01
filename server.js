const express = require('express');
const app = express();
const expressSession = require("express-session");
const path = require('path');
const mongoose = require('mongoose');
const enforce = require('express-sslify');
const cron = require('cron').CronJob;
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const localStrategy = require("passport-local");

//Models declarations
const Quiz = require("./models/quiz");
const Question = require("./models/question");
const User = require("./models/user");

//Routes declarations
const indexRouter = require("./routes/index");
const quizRouter = require("./routes/quizzes");
const questionRouter = require("./routes/questions");
const sessionRouter = require("./routes/session");
const adminRouter = require("./routes/admin");

// Config declarations
const port = process.env.PORT || 5000;
const ip = process.env.IP;
const db = process.env.DATABASEURL || "mongodb://localhost/knowrona";
const seedDB = require("./config/seed");
const environment = process.env.NODE_ENV || 'dev';


//Needed to make requests from front end to back end.
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));

//mongoose connection
mongoose.connect(db, ({
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}))
  .then(() => { console.log("connected to: " + db) })
  .catch(err => { console.log(err.message); });;

//Passport Configuration
app.use(expressSession({
  secret: "try another username",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
})

// Creating routes shorthand
app.use(indexRouter);
app.use("/quizzes", quizRouter);
app.use("/questions", questionRouter);
app.use("/session", sessionRouter);
app.use("/admin", adminRouter);


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

// Redirect to React in non Dev environment
if (environment !== 'dev') {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join("client", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}



// Listening to the server
app.listen(port, ip, () => {
  console.log('Server running on port', port)
});