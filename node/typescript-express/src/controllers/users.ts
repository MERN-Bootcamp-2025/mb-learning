import { Request, Response } from "express";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { CreateUserQueryParams } from "../types/query-params";
import { User } from "../types/response";

export const getUsers = (req: Request, res: Response) => {
    res.send([]);
}

export const getUsersById = (req: Request, res: Response) => {
    res.send({});
}

export const createUser = (req: Request<{},{},CreateUserDto, CreateUserQueryParams>, res: Response<User>) => {
    res.status(201).send({
        id: 101,
        username: "Arzoo",
        email: "aj@arzoo.com"
    })
}