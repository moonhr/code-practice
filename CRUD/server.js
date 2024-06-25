const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('database.db');

app.use(bodyParser.json());
app.use(express.static('.'));

db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS entries (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT)");
});

app.get('/entries', (req, res) => {
    db.all("SELECT * FROM entries", (err, rows) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(rows);
        }
    });
});

app.post('/entries', (req, res) => {
    const text = req.body.text;
    db.run("INSERT INTO entries (text) VALUES (?)", [text], function (err) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send({ id: this.lastID, text });
        }
    });
});

app.delete('/entries/:id', (req, res) => {
    const id = req.params.id;
    db.run("DELETE FROM entries WHERE id = ?", [id], function (err) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(204).send();
        }
    });
});

app.put('/entries/:id', (req, res) => {
    const id = req.params.id;
    const text = req.body.text;
    db.run("UPDATE entries SET text = ? WHERE id = ?", [text, id], function (err) {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send();
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
