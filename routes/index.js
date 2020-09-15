const express = require('express');
const router = express.Router();

// In Heroku, index will redirect to the react app, writing the following 3 lines will prevent it from doing so. That's why it's commented out.
// router.get('/',(req,res)=>{
//     res.send('this is the homepage')
// })

module.exports = router;
