import express from "express";
import { getBook, postBook, deleteBook, updateBook, getRes } from "../controllers/bookapi.js";
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

router.get("/", getRes)
router.get("/books", getBook)
//router.post("/books", postBook)
router.post("/books", upload.single("cover"), postBook)
router.delete("/books/:id", deleteBook)
router.put("/books/:id", upload.single("cover"), updateBook)

export default router;