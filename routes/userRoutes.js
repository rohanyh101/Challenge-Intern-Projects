import express from "express";
const router = express.Router();
import { getUser, 
    createUser,
    updateUser,
    getUsers,
    deleteUser,
} from "../controllers/userController.js";

router.get('/', getUsers);      // works
router.get('/:id', getUser);    //working
router.post('/', createUser);   //working
router.put('/:id', updateUser); //working
router.delete('/:id', deleteUser);  //working

export default router;