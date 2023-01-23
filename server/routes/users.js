import express from "express";
import { getUser, putUser,  delUser } from "../controllers/user.js";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/public/upload')
    },
    filename: function (req, file, cb) {

        cb(null, `image-${Date.now()}.${file.originalname}`)
    }
})

const upload = multer({
    storage: storage
})

router.get("/user/:id", getUser);
router.put("/user/:id", upload.single("cover"), putUser);
router.delete("/user/:id", delUser);

export default router;