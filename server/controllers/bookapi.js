import { db } from '../connect.js'

export const getRes = (req, res) => {
    res.json("Hello World")
}

export const getBook = (req, res) => {
    const q = "SELECT * FROM books"
    db.query(q, (err, data) => {
        if (err) {
            return res.json(err)
        } else return res.json(data)
    })
}



export const postBook = (req, res) => {
    
    const { title } = req.body;
    const { description } = req.body;
    const { filename } = req.file;
    const { price } = req.body;


    if (!title || !description || !filename || !price) {
        return res.status(400).json("Please fill all the fields")
    }

    try {

        db.query("INSERT INTO books SET ?", { title: title, description: description, cover: filename, price: price }, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log("Data inserted successfully")
                res.status(200).json({ status: 200, data: req.body })
            }
        })
    } catch (error) {
        res.status(422).json({ status: 422, error })
    }

}


export const deleteBook = (req, res) => {
    const bookID = req.params.id
    const q = "DELETE FROM books WHERE id=?"

    db.query(q, bookID, (err, data) => {
        if (err) {
            return res.json(err)
        } else return res.json("Data deleted successfully")
    })
}

export const updateBook = (req, res) => {
    const bookID = req.params.id

    const { title } = req.body;
    const { description } = req.body;
    const { filename } = req.file;
    const { price } = req.body;


    if (!title || !description || !filename || !price) {
        return res.status(400).json("Please fill all the fields")
    }

    try {

        db.query("UPDATE books SET ? WHERE id=?", [{ title: title, description: description, cover: filename, price: price }, bookID], (err, data) => {
            if (err) {
                console.log(err)
            } else {
                console.log("Data updated successfully")
                res.status(200).json({ status: 200, data: req.body })
            }
        })
    } catch (error) {

        res.status(422).json({ status: 422, error })
    }

}

