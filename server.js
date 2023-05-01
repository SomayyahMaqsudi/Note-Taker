const express = require('express'); //requiring express

const app = express();
const PORT = process.env.PORT || 3000; //process.env.PORT || 3000 means: whatever is in the environment variable PORT, or 3000 if there's nothing there.


app.use(express.urlencoded({extended: true}));// is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. <extended: true> precises that the req.body object will contain values of any type instead of just strings.

app.use(express.json());
app.use(express.static("public"));
//You DO NOT NEED express.json() and express.urlencoded() for GET Requests or DELETE Requests. You NEED express.json() and express.urlencoded() for POST and PUT requests,


//requiring the needed apps
require("./routes/apiRoute")(app);
require("./routes/htmlRoute")(app);

//The app.listen() function is used to bind and listen to the connections on the specified host and port. T
app.listen(PORT, function() {
  console.log(`Server Listening on Port` + PORT)
});




//SIDE NOTE: The Cannot find module error is a common error that usually happens when dependencies are not installed.