const express = require("express");
const app = express();
const Bp = require("body-parser")
const date = require(__dirname + "/date.js"); //to locally require module
//console.log(date)
app.set("view engine", 'ejs'); //enables us to use templating using EJS
app.use(Bp.urlencoded({extended: true})); // for parsing request bodies
app.use(express.static("public")); //To serve static files such as images, CSS files, and JavaScript files
var Items =[];   // array of items

app.get("/",function(req,res){
     //let day = date.getDay();
     let day = date.getDate();   //day will get data that will be returned by getDate fun
     res.render("list", {Day : day, Items: Items}) //it will render these variables to list.ejs inside our views folder

});

app.post("/",function(req,res){
	let Item = req.body.newItem; //Item will contain the new item we have added
	Items.push(Item); 
	res.redirect("/")  //redirecting to app.get

})

app.listen("3000");