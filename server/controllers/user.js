import { db } from '../connect.js'

export const getUser = (req, res) => {
    const userID = req.params.id
    const q = "SELECT * FROM users WHERE id=?"
    db.query(q, userID, (err, data) => {

        if (err) {
            return res.json(err)
        } else {
            return res.json(data)
        }
    })
}


export const putUser = (req, res) => {


    const userID = req.params.id;
    const {email} = req.body;
    const {filename} = req.file;
    


    if (!email || !filename) {
        return res.status(400).json("Please fill all the fields")
    }

    try {
        const q = "UPDATE users SET email=?, cover=? WHERE id=?"
        db.query(q, [email, filename, userID], (err, data) => {

                if (err) {
                    console.log(err)
                } else {
                    console.log("Data updated successfully")
                    res.status(200).json({ status: 200, data: req.body })
                }
            })
        }
        catch (error) {
            res.status(422).json({ status: 422, error })
        }

}




export const delUser = (req, res) => {
    const userID = req.params.id
    const q = "DELETE FROM users WHERE id=?"
    db.query(q, userID, (err, data) => {
        if (err) {
            return res.json(err)
        } else {
            return res.json("Data deleted successfully")
        }
    })
}