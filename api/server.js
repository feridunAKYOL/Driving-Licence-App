const express = require("express");
const bodyParser = require("body-parser");
//const morgan = require('morgan');
const cookieParser = require("cookie-parser");
const path = require("path");
// const mongoose = require('./db/mongoose.js')

const app = express();
//const dev = app.get('env') !== 'production'

// if(!dev){
//   app.disable('x-powered-by')
//   app.use(compression())
//   app.use(morgan('common'))

  //app.use(express.static(path.resolve(__dirname, "build")));
  const secret = "mysecretsshhh";
  
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  
  // app.get('*' , (req,res) => {
  //   res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
  // })
//}
//if(dev){
 // app.use(morgan('dev'))
  // if user makes a request http://localhost:5000/api/home it will go to ./home/index.js
  app.use("/", require("./home"));
  app.use("/", require("./login/login.js"));
  app.use("/tests", require("./tests")); // ./tests/index.js
  app.use("/comment", require("./comment"));

//}

module.exports = app;
