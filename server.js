import express from "express";
import bcrypt from "bcrypt-nodejs";
import cors from "cors";
import knex from "knex";
import { handleRegister } from "./controllers/register.js";
import { handleSignin } from "./controllers/signin.js";
import { handleProfileGet } from "./controllers/profile.js";
import { handleImageSubmit } from "./controllers/image.js";

const connection = {
    client: "pg",
    connection: {
        host: process.env.DATABASE_HOST,
        port: 5432,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PW,
        database: process.env.DATABASE_DB
    }
};

const db = knex(connection);

const app = express();
app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    res.send("Success")
})

app.post("/signin", (req, res) => { handleSignin(req, res, db, bcrypt) });

app.post("/register", (req, res) => { handleRegister(req, res, db, bcrypt) });

app.get("/profile/:id", (req, res) => { handleProfileGet(req, res, db) });

app.put("/image", (req, res) => { handleImageSubmit(req, res, db) });

const PORT = process.env.PORT;

app.listen(PORT)