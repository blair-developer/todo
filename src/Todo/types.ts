export enum PivotKeysEnum{
    Tasks = "Tasks",
    TaskForm = "TaskForm",
    Completed = "CompletedTasks",
}

export interface Itask {
    id: string;
    title: string;
    isFav: boolean;
}