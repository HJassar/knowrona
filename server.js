// Use dotenv in development
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const flash = require('flash');
//models declarations
Quiz = require('./models/quiz');
Question = require('./models/question');
//routes declarations
const indexRouter = require('./routes/index')
const quizRouter = require('./routes/quiz')
const questionRouter = require('./routes/questions')
//seeds declaration
const seedDB = require('./seed');
//value declarations
const port = process.env.PORT || 5000;
const ip = process.env.IP;
const db = process.env.DB || "mongodb://localhost/knowrona";

//Needed to make requests from front end to back end.
const cors = require('cors');
app.use(cors());

//avoiding deprecated warnings for mongoose
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);

//mongoose connection
mongoose.connect(db);

seedDB();

app.use(indexRouter)
app.use('/quiz',quizRouter)
app.use('/questions',questionRouter)


// Set up the react build directory as static in production
// Good Explanation of what's going on here: https://www.youtube.com/watch?v=71wSzpLyW9k&t=328s
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join('client', 'build')));

    app.get('*', (req, res) => {
        // Using resolve here instead of join https://stackoverflow.com/questions/35048686/whats-the-difference-between-path-resolve-and-path-join
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')); 
    })
}

app.listen(port, ip, () => {
    console.log('connected')
})