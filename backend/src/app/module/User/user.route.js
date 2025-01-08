import express from 'express';
import { UserControllers } from './user.controller.js';

const router = express.Router();

router.post('/', UserControllers.createUser);

export const UserRoutes = router;
