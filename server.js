import express from "express";
import bcrypt from "bcrypt-nodejs";
import cors from "cors";

const app = express();
app.use(express.json());

const database = {
    users: [
        {
            id: "123",
            name: "Blaz",
            email: "blaz@gmail.com",
            password: "apples",
            entries: 0,
            joined: new Date()
        },
        {
            id: "124",
            name: "Sally",
            email: "sally@gmail.com",
            password: "bananas",
            entries: 0,
            joined: new Date()
        }
    ]
}

app.use(cors());

app.get("/", (req, res) => {
    res.send(database.users);
})

app.post("/signin", (req, res) => {
    if (req.body.email === database.users[0].email &&
        req.body.password === database.users[0].password) {
        res.json(database.users[0]); // Send the user object as the response
    } else {
        res.status(400).json("Error logging in");
    }
})

app.post("/register", (req, res) => {
    const { name, email, password } = req.body;
    database.users.push({
        id: "125",
        name: name,
        email: email,
        password: password,
        entries: 0,
        joined: new Date()
    });
    res.json(database.users[database.users.length - 1]);
})

app.get("/profile/:id", (req, res) => {
    const { id } = req.params;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            res.json(user);
        }
    })
    if (!found) {
        res.status(400).send("Not found");
    }
})

app.put("/image", (req, res) => {
    const { id } = req.body;
    let found = false;
    database.users.forEach((user) => {
        if (user.id === id) {
            found = true;
            user.entries++;
            res.json(user.entries);
        }
    });
    if (!found) {
        res.status(400).send("Not found");
    }
});

app.listen(3000)