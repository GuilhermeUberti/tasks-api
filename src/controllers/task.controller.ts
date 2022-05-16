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
    let id: string = req.params.id;

    let task = await Tasks.findByPk(id);
    if (task) {
        if (req.body.title) {
            task.title = req.body.title;
        }
        if (req.body.done) {
            switch (req.body.done.toLowerCase()) {
                case 'true':
                case '1':
                    task.done = true;
                    break;
                case 'false':
                case '0':
                    task.done = false;
                    break;
            }
        }
        await task.save();
        res.json({ item: task });
    } else {
        res.json({ error: 'Item não encontrado!' });
    }
}

export const deleteTask = async (req: Request, res: Response) => {
    let id: string = req.params.id;

    let task = await Tasks.findByPk(id);
    if (task) {
        await task.destroy();
    } 
    res.json({});
}