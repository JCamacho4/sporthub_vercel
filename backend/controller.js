const sqlite3 = require("sqlite3").verbose();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const bcrypt = require("bcrypt");
const saltRounds = 10;
const port = 8080;

const db = new sqlite3.Database("./database.db", (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the SQlite database.");
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/users", (req, res) => {
  const query = "SELECT * FROM users";

  db.all(query, (err, rows) => {
    if (err) {
      res.send(err.message);
    }
    res.send(rows);
  });
});

app.post("/newUser", (req, res) => {
  const { username, password, name, email } = req.body;
  const sql = `INSERT INTO users (username, password, name, email) VALUES (?, ?, ?, ?)`;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Internal server error");
    } else {
      db.run(sql, [username, hash, name, email], (err) => {
        if (err) {
          console.error(err.message);
          res.status(500).send("Internal server error");
        } else {
          res.status(200).send("User created successfully");
        }
      });
    }
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM users WHERE username = ?";
  db.all(sql, [username], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Internal server error");
    } else {
      bcrypt.compare(password, rows[0].password, function (err, result) {
        if (err) {
          console.error(err.message);
          res.status(500).send("Internal server error");
        } else {
          res.status(result ? 200 : 403).send(result);
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

/* db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Close the database connection.");
}); */
