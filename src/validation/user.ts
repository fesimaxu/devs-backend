import z from 'zod';

export const UserSchema = z.object({
    firstname: z.string({
        required_error: "Firstname is required"
    }),
    lastname: z.string({
        required_error: "Lastname is required"
    }),
    email: z.string({
        required_error: "Email is required"
    }).email({
        message: "The email supplied is not valid"
    }),
    gender: z.string({
        required_error: "Gender is required"
    }),
    password: z.string({
        required_error: "Password is required"
    })
});