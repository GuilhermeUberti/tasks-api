import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface TasksInstance extends Model {
    id: number;
    title: string,
    done: boolean
}

export const Tasks = sequelize.define<TasksInstance>('Tasks', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'tasks',
    timestamps: false
})