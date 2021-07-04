const express = require("express");
const app = express();
const Bp = require("body-parser")
const date = require(__dirname + "/date.js"); //to locally require module
//console.log(date)
const mongoose = require("mongoose");

app.set("view engine", 'ejs'); //enables us to use templating using EJS
app.use(Bp.urlencoded({extended: true})); // for parsing request bodies
app.use(express.static("public")); //To serve static files such as images, CSS files, and JavaScript files

mongoose.connect("mongodb://localhost:27017/todolistDB",  {useNewUrlParser: true, useUnifiedTopology: true});


const listSchema = {
     name : String
};

const item = mongoose.model("item", listSchema);

const item1 = new item({
     name : "Work"
})
//item1.save();

app.get("/",function(req,res){
     //let day = date.getDay();
     let day = date.getDate();   //day will get data that will be returned by getDate fun
     item.find({} , function(err, found){
      res.render("list", {Day : day, Itemzz : found}); 
     // console.log(found);
     });
     
     
   //  res.render("list", {Day : day, Itemzz: Items}) //it will render these variables to list.ejs inside our views folder

});

app.post("/",function(req,res){
	let newItem = req.body.newItem; //newItem will contain the new item we have added
	let NI = new item({
          name : newItem
     })
      NI.save();
     //console.log(NI);
	res.redirect("/")  //redirecting to app.get

})

app.post("/delete",function(req,res){
const delete_id = req.body.checkbox;    //delete_id will contain id of item that is checked on
item.findByIdAndRemove(delete_id, function(err){  //for removing that item
     console.log(err);
});
res.redirect("/");
});

app.listen("3000");