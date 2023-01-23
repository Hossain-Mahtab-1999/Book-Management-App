import { db } from '../connect.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const getRegister = (req, res) => {
    const q = "SELECT * FROM users"
    db.query(q, (err, data) => {
        if (err) {
            return res.json(err)
        } else return res.json(data)
    })
}

export const register = (req, res) => {

    //if user exists
    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q, [req.body.username], (err, result) => {
        if (err) return res.status(500).json({ err })
        if (result.length > 0) return res.status(400).json("Username already exists")

        //if user does not exists
        //hash password
        const salt = bcrypt.genSaltSync(10);
        const hashedpassword = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO USERS (`username`, `email`, `password` ) VALUES (?)"
        const values =
            [
                req.body.username,
                req.body.email,
                hashedpassword,
            ];
        db.query(q, [values], (err, result) => {
            if (err) return res.status(500).json({ err })
            return res.status(200).json("User created")
        })
    })
}

export const login = (req, res) => {
    const q = "SELECT * FROM users WHERE username = ?"
    db.query(q, [req.body.username], (err, result) => {
        if (err) return res.status(500).json({ err })
        if (result.length === 0) return res.status(404).json("User not found");

        const validPassword = bcrypt.compareSync(req.body.password, result[0].password)

        if (!validPassword) return res.status(400).json("Invalid Password")

        const token = jwt.sign({ id: result[0].id }, "secretkey", { expiresIn: "1d" })

        const { password, ...others } = result[0]

        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).json(others);
    });
};


export const logout = (req, res) => {
    res.clearCookie("accessToken", {
        secure: true,
        httpOnly: true,
        sameSite: "none"
    }).status(200).json("Logged out")
}