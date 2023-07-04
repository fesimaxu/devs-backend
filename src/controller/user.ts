import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

import { createData, getData, hash } from '../utils';
import { UserSchema } from '../validation/user';

export const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
    const getAllUsersData = getData('./users.json');
    res.status(200).json({
        status: 'success',
        method: req.method,
        message: 'All users returned successfully',
        data: getAllUsersData
    });
}

export const getSingleUser = (req: Request, res: Response, next: NextFunction) => {
    const getAllUsersData = getData('./users.json');
    console.log(getAllUsersData);

    // Get single user data
    const singleUser = getAllUsersData.filter((user) => {
        return user.id === +req.params.id;
    })

    if (singleUser.length === 0) {
        res.status(400).send({
            status: 'error',
            method: req.method,
            message: `User with ID - ${req.params.id} does not exist`
        })
        return;
    }

    res.status(200).json({
        status: 'success',
        method: req.method,
        message: `User with ID - ${req.params.id} returned successfully`,
        data: singleUser
    });
};

export const registerUser = (req: Request, res: Response, next: NextFunction) => {
    const getAllUsersData = getData('./users.json');
    const bodyData = req.body;

    const error = UserSchema.safeParse(bodyData);

    if (error.success === false) {
        res.status(400).send({
            status: 'error',
            method: req.method,
            message: error.error.issues[0].message
        })
        return;
    }

    // Check if email already exist
    const findUserByEmail = getAllUsersData.find((user) => user.email === bodyData.email);
    if (findUserByEmail) {
        res.status(400).send({
            status: 'error',
            method: req.method,
            message: `User with Email - ${bodyData.email} already exist`
        })
        return;
    }

    // Hash password
    const hashedPassword = hash(bodyData.password)

    const userData = {
        id: uuidv4(),
        ...bodyData,
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date()
    }

    getAllUsersData.push(userData)
    createData(getAllUsersData, "./users.json")
    res.status(200).json({
        status: 'success',
        method: req.method,
        message: `User with Email - ${bodyData.email} created successfully`,
        data: userData
    });
}