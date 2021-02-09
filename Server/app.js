const express = require("express");

// Initializing express function
const app = new express();


//Cross Origin Resource Sharing which means you can access a backend API through angularjs ($http) if CORS is enabled in backend
const cors = require("cors"); 

//body-parser extract the entire body portion of an incoming request stream and exposes it on req.body
//This body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request. 
var bodyparser=require("body-parser");

// JSON Web Tokens are an open, industry standard RFC 7519 method for representing claims securely between two parties.
// JWT.IO allows you to decode, verify and generate JWT.
const jwt=require("jsonwebtoken");

//*************************Data Models*************************************

const Userdata = require("./src/models/Userdata");
const Complaintdata = require("./src/models/Complaintdata");
//**************************************************************************

// app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(bodyparser.json());
app.use(express.static("./public"));


//***************Add signup User to DB Starts*****************************
app.post("/adduser", function(req,res){                //removed=>  verifyToken,
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    // console.log(req.body);
    var item ={
        firstname: req.body.user.firstname,
        lastname: req.body.user.lastname,
        mobileno: req.body.user.mobileno,
        email: req.body.user.email,
        password: req.body.user.password
    }
    var user = new Userdata(item);
    user.save();
});
//*****************Add signup User to DB Ends*****************************

//------------------Log in verification with DB Starts--------------------------
    // ................Middleware Function to very Token Starts.....................

function verifyToken(req,res,next){
    // console.log(req.headers.authorization);
    if(!req.headers.authorization){
        return res.status(401).send("Unauthorized request1")
    }
    let token=req.headers.authorization.split(' ')[1]  //gave space
    if(token=="null"){
        return res.status(401).send("Unauthorised request2")
    }
    let payload=jwt.verify(token,"secretKey")
    // console.log(payload)
    if(!payload){
        return res.status(401).send("Unauthorised request3")
    }
    req.userId=payload.subject
    next()
}
// ................Middleware Function to very Token Ends.....................


app.post("/login",(req,res)=>{
    let enteredData = req.body;
    console.log(enteredData)
    let enteredEmail = enteredData.email
    let enteredPassword = enteredData.password
    Userdata.findOne({"email":enteredEmail})
    .then((user=>{
        //   res.send(user);
        //   console.log(user)
        if (enteredEmail === user.email && enteredPassword === user.password){
            let payload={subject:user._Id}
            let token=jwt.sign(payload,"secretKey")
            console.log(" Sign In Success");
            res.status(200).send({token})
        //    res.send({"firstname": user.firstname}); 
        }
        else if(enteredEmail !== user.email){
            res.status(401).send("Invalid Username")
        }
        else if(enteredPassword !== user.password){
            // res.status(401).send("Invalid Password")
            res.send({"error": "Entered Wrong Password"});
        }
        else{
            console.log("Success")
            res.send({"firstname": user.firstname});
           
        }
          
    }))
    .catch(function(){
        const emaildisplay = "Email ID not Registered";
        const display = "";
        console.log("Error Catched")
        res.send({"error": "Email ID not Registered"});
        
    })
 
})

app.post("/addcomplaint", function(req,res){                
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    var item ={
        category: req.body.complaint.category,
        name: req.body.complaint.name,
        age: req.body.complaint.age,
        gender: req.body.complaint.gender,
        address: req.body.complaint.address,
        place: req.body.complaint.place,
        pin: req.body.complaint.pin,
        phoneno: req.body.complaint.phoneno,
        email: req.body.complaint.email,
        complaint: req.body.complaint.complaint,
        file: req.body.complaint.file
    }
    var Complaint = new Complaintdata(item);
    Complaint.save();
});

app.get("/list/complaint",function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    Complaintdata.find()
    .then(function(complaint){
        res.send(complaint);
    });
});
app.listen(5000, function(){
    console.log("Listening to Port 5000");
});