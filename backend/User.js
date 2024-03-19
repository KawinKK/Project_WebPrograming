const express = require("express");
const { MongoClient } = require('mongodb');
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = 8081;
const url = "mongodb+srv://kawinkengkate:bindai55@cluster0.vnfisxu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName = "Jakke";
const client = new MongoClient(url);

//Get All User Data
app.get("/getUsers", async (req, res)=>{
  await client.connect();
  console.log("Connected successfully to server.");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const findResult = await collection.find().toArray();
  console.log("Found document => ", findResult);
  res.json(findResult);
  client.close();
});

//Get User Data By JakkaId
app.get("/getUsers/jakkaId/:jakkaid", async (req, res)=>{
  const jakkaId = parseInt(req.params.jakkaid);

  await client.connect();
  console.log("Connected successfully to server.");
  const db = client.db(dbName);
  const collection = db.collection("User");

  var query = { jakkaId: jakkaId };
  const findResult = await collection.find(query).toArray();
  console.log("Found document => ", findResult);
  res.json(findResult);
  client.close();
});

//Get User Data By StudentId
app.get("/getUsers/studentId/:studentid", async (req, res)=>{
  const studentId = parseInt(req.params.studentid);

  await client.connect();
  console.log("Connected successfully to server.");
  const db = client.db(dbName);
  const collection = db.collection("User");

  var query = { studentId: studentId };
  const findResult = await collection.find(query).toArray();
  console.log("Found document => ", findResult);
  res.json(findResult);
  client.close();
});

//Register New User
app.post("/register", async (req, res)=>{
  const jakkaId = parseInt(req.body.jakkaId);
  const studentId = parseInt(req.body.studentId);
  const name = req.body.name;
  const password = req.body.password;
  console.log(jakkaId + " " + studentId + " " + name + password);
  await client.connect();
  console.log("Connected successfully to server.");
  const db = client.db(dbName);
  const collection = db.collection("User");

  var query1 = { studentId: studentId };
  var query2 = {jakkaId: jakkaId};
  const findResult = await collection.findOne( { $or: [  query1 , query2  ] } );
  console.log(findResult);
  if(findResult !== null){
    console.log("You already register");
    res.sendStatus(403);
  }else{
    const newUser = {
      jakkaId: jakkaId,
      studentId: studentId,
      name: name,
      password: password
    };
    const findResult2 = await collection.insertOne(newUser);
    console.log("Register success => ", findResult2);
    res.json(findResult2);
  }
  client.close();
});

//Login
app.post("/login", async (req, res)=>{
  const studentId = parseInt(req.body.studentId);
  const password = req.body.password;
  await client.connect();
  console.log("Connected successfully to server.");
  const db = client.db(dbName);
  const collection = db.collection("User");

  var query = {studentId: studentId};
  const findResult = await collection.findOne(query);
  if(findResult !== null){
    console.log("Student ID = ", findResult.studentId);
    if(findResult.password === password){
      console.log("Success Login!");
      res.json(findResult);
    } else {
      console.log("Password not correct!");
      res.json(findResult);
    }
  } else {
    console.log("Not found user");
    res.json(findResult);
  }
  client.close();
});

app.listen(port, () => {
  console.log("Connect to port ", port);
});