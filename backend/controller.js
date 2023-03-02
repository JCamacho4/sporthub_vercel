const sqlite3 = require("sqlite3").verbose();
const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const bcrypt = require("bcrypt");
const saltRounds = 10;
const port = 8080;
const cors = require("cors");
require("dotenv").config();
app.use(cors());

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
      db.get(
        "SELECT * FROM users WHERE username = ?",
        [username],
        (err, row) => {
          if (err) {
            console.error(err.message);
            res.status(500).send("Internal server error");
          } else if (row) {
            res
              .status(400)
              .send("The username was already inserted in the database");
          } else {
            db.run(sql, [username, hash, name, email], (err) => {
              if (err) {
                if (err.message.includes("UNIQUE constraint failed")) {
                  res.status(400).send("Username already exists");
                }
                console.error(err.message);
                res.status(500).send("Internal server error");
              } else {
                token = jwt.sign({ username: username }, process.env.TOKEN_KEY);
                res.status(200).send(token);
              }
            });
          }
        }
      );
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
      user = rows[0];
      if (user) {
        bcrypt.compare(password, user.password, function (err, result) {
          if (err) {
            console.error(err.message);
            res.status(500).send("Internal server error");
          } else {
            if (result) {
              token = jwt.sign({ username: username }, process.env.TOKEN_KEY);
              res.status(200).send(token);
            } else {
              res.status(403).send("Password not valid");
            }
          }
        });
      } else {
        res.status(403).send("Username not valid");
      }
    }
  });
});

app.post("/userByToken", (req, res) => {
  try {
    const { token } = req.body;
    if (token) {
      const user = jwt.verify(token, process.env.TOKEN_KEY);
      res.status(200).send(user);
    } else {
      res.status(100).send("No token");
    }
  } catch (e) {
    res.status(400).send("Token not valid");
  }
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
