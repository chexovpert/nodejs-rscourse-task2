import { Router, Request, Response } from "express";
import { signToken } from "./login.service";

const router = Router();

router.route('/').post(async (req: Request, res: Response): Promise<void> => {
    const {login, password} = req.body;
    const token = await signToken(login, password);
    //console.log(token);
    
    if (!token) {
        res.status(403).send("Wrong login/password")
    } else {
        res.status(200).json(token);
    }
})

export default router