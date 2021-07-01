//module.export will send data
//in this case a function

//for proper date
module.exports.getDate = function() {
let today = new Date(); 
let option = {
	weekday: "long",
	day: "numeric",
	month: "long"
};
return today.toLocaleDateString("en-US", option);
}

//for only weekday
module.exports.getDay = function() {
let today = new Date(); 
let option = {
	weekday: "long",

};
return today.toLocaleDateString("en-US", option);
}