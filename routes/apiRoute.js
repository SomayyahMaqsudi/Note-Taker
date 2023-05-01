const db = require("../db/db.json"); 
const store = require('../db/store');

//module.exports = function(app) means this file has been exported as a function, you can access it by require('the-path-to-file.js').
module.exports = function(app){
  
// app.get("/..api/db", function(req, res) {res.json(db_data);
// }); //--> GET /api/notes should read the db.json file and return all saved notes as JSON.


app.get('/api/notes', (req, res) => {

    store
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));

    // readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  }); //--> GET /api/notes should read the db.json file and return all saved notes as JSON.

// app.post("/api/db", function(req, res) {res.json(db_data);
// }); //--> POST /api/db should receive a new note to save on the request body, and add it to db.json file and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).


app.post('/api/notes', (req, res) => {

    store
    .addNote(req.body)
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));

//     console.log(req.body);
//     const { note } =req.body;
//     if(req.body) {
//         const newNote = {
//             note_id: uuid(),
//         };
//     readAndAppend(newTip, './db/db.json');
//     res.json(`Notes added successfully`);
// } else{
//     res.err('Error in adding note');
// }
});

}; //--> POST /api/db should receive a new note to save on the request body, and add it to db.json file and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).


