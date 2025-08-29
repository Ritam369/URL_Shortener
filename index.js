import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const names = [
    {id: 1, name: "John"},
    {id: 2, name: "Jane"},
    {id: 3, name: "Doe"},
];

app.get('/data', (req, res) => {
    console.log("A GET request");
    res.send(names);
});

app.get('/data/:id', (req, res) => {
    const id = Number(req.params.id);
    const name = names.find(n => n.id === id);
    if (name) {
        res.send(name);
    } else {
        res.status(404).send({ message: "Name not found" });
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});