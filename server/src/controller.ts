import express, { Request, Response } from "express";

const controllerFunction = (req: Request, res: Response) => {
    res.send('Hello World!')
};

export default controllerFunction;