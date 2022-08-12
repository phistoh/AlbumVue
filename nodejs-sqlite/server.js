// Create express app
var express = require("express")
var app = express()
var db = require("./database.js")

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Server port
var HTTP_PORT = 8000 
// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});
// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

// Insert here other API endpoints
app.get("/api/getalbums", (req, res, next) => {
    var sql = "SELECT * FROM albums ORDER BY mediatype ASC, artist COLLATE NOCASE ASC, album COLLATE NOCASE ASC"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});

app.get("/api/getalbumsbyartist/:artist/", (req, res, next) => {
    var sql = "SELECT * FROM albums WHERE artist = ? COLLATE NOCASE"
    var params = [req.params.artist]
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});

app.get("/api/getalbumsbyname/:album/", (req, res, next) => {
    var sql = "SELECT * FROM albums WHERE album = ? COLLATE NOCASE"
    var params = [req.params.album]
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});

app.get("/api/getalbum/:artist/:album", (req, res, next) => {
    var sql = "SELECT * FROM albums WHERE artist = ? AND album = ? COLLATE NOCASE"
    var params = [req.params.artist, req.params.album]
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":row
        })
      });
});

app.post("/api/addalbum/", (req, res, next) => {
    var errors=[]
    if (!req.body.artist){
        errors.push("No artist specified");
    }
    if (!req.body.album){
        errors.push("No album specified");
    }
    if (!req.body.mediatype){
        errors.push("No mediatype specified");
    }
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    var data = {
        artist: req.body.artist,
        album: req.body.album,
        mediatype: req.body.mediatype
    }
    var sql = "INSERT INTO albums(artist,album,mediatype) VALUES(?,?,?)"
    var params = [data.artist, data.album, data.mediatype]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        })
    });
})

// app.delete("/api/deletealbum/:artist/:album/:mediatype", (req, res, next) => {
//     var sql = "DELETE FROM albums WHERE artist = ? AND album = ? AND mediatype = ?"
//     var params = [req.params.artist, req.params.album, req.params.mediatype]
//     db.run(sql, params, function (err, result) {
//             if (err){
//                 res.status(400).json({"error": res.message})
//                 return;
//             }
//             res.json({"message":"deleted", changes: this.changes})
//     });
// })

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});