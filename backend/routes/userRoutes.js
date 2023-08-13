import express from 'express';
import {
    signInUser,
    signUpUser,
    signOutUser,
    getUserProfile,
    updateUserProfile
} from "../controllers/userController.js";

const router = express.Router();

router.post('/', signUpUser);
router.post('/signIn', signInUser);
router.post('/signOut', signOutUser);
router.get('/profile', getUserProfile);
router.put('/profile', updateUserProfile);

export default router;