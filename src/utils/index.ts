import fs from "fs";
import bcrypt from "bcrypt"

export const getData = (filePath: string) => {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
}

export const createData = (data, filePath) => {
    const stringData = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, stringData);
}

export const hash = (myPlaintextPassword: string) => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(myPlaintextPassword, salt);
    return hash;
}