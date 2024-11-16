// const express = require("express");
// const app = express();
// const fs = require("fs");

// app.use(express.json())

// app.get("/", (req, res) => {
//     fs.readFile("./a.txt","utf-8",(err, Data) => {
//         res.send(Data);
//     })
// })

// app.listen(3000, () => {
//     console.log("You server is listening at port 3000")
// })
// ---------------------------------------------------
// const express = require("express");
//  const app = express();

//  app.use(express.json())

//  app.post("/",(req,res)=>{
//    const username =req.headers.username
//    const password =req.headers.password
//    const email =req.headers.email
//    res.send(`username:${username},password:${password},email:${email}`)
//  })
//  app.listen(3000, () => {
//         console.log("You server is listening at port 3000")
//    })

//  _______________________________________________________

// const express = require("express");
//  const app = express();
//  app.use(express.json())

//  app.post("/",(req,res)=>{
//     const {token,name}=req.query
//     res.send({token,name});
//  })
//  app.listen(3000, () => {
//            console.log("You server is listening at port 3000")
//    })


// const express = require("express");
//  const app = express();
// app.use(express.json())
// app.post("/",(req,res)=>{
//    const {name,password} = req.body
//      if(name==="sam" & password==="1234"){
//        res.send("login successfull");
//      }
//       else{
//       res.send("invalid")
//       }
//   })
//   app.listen(3000, () => {
//               console.log("You server is listening at port 3000")
//       })
// -----------------------------------------------------

// const express = require("express");
//   const app = express();
//   const fs = require("fs")
//   app.use(express.json())

//   function sampleMiddeleWare(req,res,next){

//   const username = "manasa"
//   const postmanname = req.body.username;
//   if(username === postmanname ) {
//     next();
//   }
//   else{
//     res.send("username is wrong")
//   }
// }
// function Middelware(req,res,next){
//     const ip = "1234";
//     const ippostman = req.headers.ip;
//     if(ip === ippostman ){
//       next();
//     }
//     else{
//       res.send("iP is wrong")
//     }

// }
// app.post("/",sampleMiddeleWare,Middelware,(req,res)=>{
//    res.send("succes")
// })
// app.post("/photos",sampleMiddeleWare,Middelware,(req,res)=>{
//    res.send("this is photo")
// })
// app.listen(3000, () => {
//           console.log("You server is listening at port 3000")
//    })
//_-----------------------------------------------------

// const express = require("express");
// const app = express();
// const fs = require("fs")
// app.use(express.json())

// function sampleMiddeleWare(req, res, next) {

//    const username = "manasa"
//    const postmanname = req.body.username;
//    const password = "9876"
//    const postmanpassword = req.body.password;

//    if (username === postmanname) {
//       next();
//    }
//    else {
//       res.send("username is wrong")
//    }
// }
// function Middelware(req, res, next) {
//    const ip = "1234";
//    const ippostman = req.headers.ip;
//    if (ip === ippostman) {
//       next();
//    }
//    else {
//       res.send("iP is wrong")
//    }

// }
// function Middelware(req, res, next) {
//    const state = "karnataka";
//    const statepostman = req.query.state;
//    if (state === statepostman) {
//       next();
//    }
//    else {
//       res.send("invalid")
//    }

// }
// app.post("/", sampleMiddeleWare, Middelware, (req, res) => {
//    res.send("city college information")
// })
// app.post("/photos", sampleMiddeleWare, Middelware, (req, res) => {
//    res.send("this is photo")
// })
// app.listen(3000, () => {
//    console.log("You server is listening at port 3000")
// })


// const express = require("express");
// const { default: mongoose } = require("mongoose");
// const app = express();
// const mangoose = require("mongoose");
// app.use(express.json());
// mangoose.connect("mongodb://localhost:27017/newDB")
// .then(()=>{console.log("db connected")})
// .catch(()=>{console.log("not connected")})
// const userSchema =  new mongoose.schema({
//    name :{type:string},
//    email :{type:string},
//    password : {type:string}

// })
// const user = mongoose.model(`user`,userSchema)
// app.post("/",(req,res)=>{
//    const {username,email,password}=req.body
//    const userDetails = new user({
//       userDetails.save
//    })
// })

const express = require("express");
const app = express();
const port = process.env.port || 4000;
const cors = require("cors");

app.use(cors());
app.get("/",(req,res)=>{
       res.send("hello world!")
})
app.listen(port,()=>{
   console.log(`complete app listening on port ${port}`)
})

























