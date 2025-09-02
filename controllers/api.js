import { names } from "../data/mockData.js";

export async function fetchData(req, res) {
    console.log("A GET request");
    res.send(names);
}

export async function fetchSpecificData(req, res) {
    const id = Number(req.params.id);
    const name = names.find(n => n.id === id);
    if (name) {
        res.send(name);
    } else {
        res.status(404).send({ message: "Name not found" });
    }
}

export async function createData(req, res) {
    const newName = req.body;
    names.push(newName);
    res.status(201).send(names);
    console.log(newName);
}

export async function updateData(req, res) {
    const idToUpdate = Number(req.params.id);
    const updatedName = req.body;
    const index = names.findIndex(n => n.id === idToUpdate);
    if (index !== -1) {
        names[index] = updatedName;
        res.send(names);
    } else {
        res.status(404).send({ message: "Name not found" });
    }
}

export async function deleteData(req, res) {
    const idToDelete = Number(req.params.id);
    const updatedData = names.filter(n => n.id !== idToDelete);
    if (updatedData.length < names.length) {
        names.length = 0; // Clear the original array
        names.push(...updatedData); // Push the filtered data back
        res.status(200).send(names);
    } else {
        res.status(404).send({ message: "Name not found" });
    }
}