//jshint esversion:6

//jshint esversion:6

// Start Using Environment Variables to Keep Secret Safe like API address in app.js

// End Using Environment Variables to Keep Secret Safe like API address in app.js
const express = require("express");
const bodyParser = require("body-parser");
//News letter notes
const request= require("request");
const https= require("https");
//ENd News letter notes
const ejs = require("ejs");



const app = express();

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


//News letter notes
app.get("/home", function(req,res){
  res.render("home")
  });

  app.post("/home",function(req,res){
    const firstName=req.body.fName;
    const lastName=req.body.lName;
    const email=req.body.email;


   const data={
       members:[
           {
               email_address:email,
               status:"subscribed",
               merge_fields:{
                   FNAME: firstName,
                   LNAME:lastName,
               }
           }
       ]
   };
   const jsonData=JSON.stringify(data)

   const url ="https://us10.api.mailchimp.com/3.0/lists/1588889117 ";

   const options={
       method:"POST",
       auth:"Joe26:579fe204344fc3d17589f5c08c27895e-us10"
   }
   const request = https.request(url, options, function(response){
       if(response.statusCode===200){
           res.render("success");
       }else{
           res.render("failure")
       }
       response.on("data", function(data){
           console.log(JSON.parse(data));
       })
   })
   request.write(jsonData);
   request.end();
  });
 
  //News letter notes

  app.get("/contact", function(req,res){
    res.render("contact");
  });

  app.get("/about", function(req,res){
    res.render("about");
  });
  app.get("/gallery", function(req,res){
    res.render("gallery");
  });
  app.get("/nasa", function(req,res){
    res.render("nasa");
  })

  app.listen(process.env.PORT || 3000,function(){
    console.log("Server has started Successfully");
 });




