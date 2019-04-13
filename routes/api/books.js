

var db = require("../../models");
var mongoose = require("mongoose");



module.exports = function(app){

    app.get("/api/books", function(req, res){
        db.Book.find({}).then(function(dbBook){
            res.json(dbBook);
        })
    });
    
    app.post("/api/books", function(req, res){
       var data = req.body;
       console.log("this is the api data", data);
        db.Book.create(data).then(function(dbBook){ 
            res.json(dbBook);
        })
    });
    


    app.delete("/api/books/:id", function(req, res){
        db.Book.findByIdAndRemove({_id:req.params.id}).then(function(dbBook){
            res.json(dbBook);
        })
    });
    
   

};


    



