import express from "express";
import { loginController, registerController } from "../controllers/authController.js";
import rateLimit from "express-rate-limit";

// ip limiter
const limiter = rateLimit({
    windowMs: 15*60*1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders:false
})
// router object
const router = express.Router()

// routes

/**
 *  @swagger
 * components:
 *  schemas:
 *      user:
 *         type:Object
 *         required:
 *             -name
 *             -lastname
 *             -email
 *             -password
 *             -location
 *          properties:
 *             id:
 *                type: string
 *                description: The Auto-generated id of collection
 *             name:
 *                type: string
 *                description: User name
 *             lastname:
 *                type: string
 *                description: User lastname
 *             email:
 *                type: string
 *                description: User email-address  
 *             password:
 *                type: string
 *                description: User password should be greater than 6 character
 *             location:
 *                type: string
 *                description: User location city or country
 *             example:
 *                 id: GDHJG&788BJBJ
 *                 name: tony
 *                 lastname: stark
 *                 email: tonystark@gamil.com
 *                 password: ironman
 *                 location: new york
 */

// REGISTER || POST
router.post('/register', limiter, registerController);

// LOGIN || POST
router.post('/login', limiter, loginController);

// export
export default router