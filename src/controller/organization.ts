import express, { Request, Response, NextFunction } from "express"

export const getOrganization = (req: Request, res: Response, next: NextFunction) => {
    const organization = [
        {
            id: 1,
            name: "Decagon",
            location: "Lekki",
        },
        {
            id: 2,
            name: "Verraki",
            location: "Mainland",
        },
        {
            id: 3,
            name: "Dangote",
            location: "Oshodi",
        }
    ];

    res.json(organization);
}