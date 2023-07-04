import express, { Router, Request, Response, NextFunction } from 'express';
import { getAllUsers, getSingleUser, registerUser } from '../controller/user';

const router = Router();

/* GET users listing. */
router.get('/get-users', getAllUsers);
router.get('/get-user/:id', getSingleUser);
router.post('/register', registerUser);

export default router;
