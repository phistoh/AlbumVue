var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "Albenliste.db"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run("CREATE TABLE IF NOT EXISTS albums(artist TEXT, album TEXT, mediatype TEXT, UNIQUE(artist, album, mediatype))");  
    }
});


module.exports = db