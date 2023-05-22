import express from "express";

const app = express();

const database = {
    users: [
        {
            id: "123",
            username: "blaz",
            email: "blaz@gmail.com",
            password: "cookies",
            entries: 0,
            joined: new Date()
        },
        {
            id: "111",
            username: "sally",
            email: "sally@gmail.com",
            password: "bananas",
            entries: 0,
            joined: new Date()
        }
    ]
}

app.get("/", (req, res) => {
    res.send("This is working");
})

app.post("/signin", (req, res) => {
    res.json("Signed in!");
})

app.listen(3000)