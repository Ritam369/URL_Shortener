import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());// Allows server to handle req with JSON data in the body

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

app.post('/data', (req, res) => {
    const newName = req.body;
    names.push(newName);
    res.status(201).send(names);
    console.log(newName);
});

app.put('/data/:id', (req, res) => {
    const idToUpdate = Number(req.params.id);
    const updatedName = req.body;
    const index = names.findIndex(n => n.id === idToUpdate);
    if (index !== -1) {
        names[index] = updatedName;
        res.send(names);
    } else {
        res.status(404).send({ message: "Name not found" });
    }
});

app.delete('/data/:id', (req, res) => {
    const idToDelete = Number(req.params.id);
    const updatedData = names.filter(n => n.id !== idToDelete);
    if (updatedData.length < names.length) {
        names.length = 0; // Clear the original array
        names.push(...updatedData); // Push the filtered data back
        res.status(200).send(names);
    } else {
        res.status(404).send({ message: "Name not found" });
    }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});