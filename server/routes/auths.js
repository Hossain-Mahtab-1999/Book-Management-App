import  express  from "express";
import { getRegister, register, login, logout} from "../controllers/auth.js";

const  router  = express.Router();

router.get("/register", getRegister);
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);


export default  router;