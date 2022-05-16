import { Request, Response } from 'express';

import { Tasks } from '../models/Task';

export const allTasks = async (req: Request, res: Response) => {
    const list = await Tasks.findAll();
    res.json({ list });
}

export const addTaks = async (req: Request, res: Response) => {
    if (req.body.title) {
        let newTask = await Tasks.create({
            title: req.body.title,
            done: req.body.done ? true : false
        });
        res.status(201).json({ item: newTask });
    } else {
        res.json({ error: 'Dados não enviados.' });
    }
}

export const updateTask = async (req: Request, res: Response) => {

}

export const deleteTask = async (req: Request, res: Response) => {

}