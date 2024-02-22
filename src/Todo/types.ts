import { Dispatch } from "react";

export enum PivotKeysEnum{
    Tasks = "Tasks",
    TaskForm = "TaskForm",
    Completed = "CompletedTasks",
}

export interface Itask {
    id: string;
    title: string;
    description?: string;
    isFav: boolean;
}
export interface ITodoContext {
    activeTasks: Itask[],
    dispatch : Dispatch<any>
}

export interface ITodoState {
    activeTasks: Itask[];
  }

  export enum ActionTypeEnum{
     Add,
     Delete
  }

  export interface IAddAction{
    type: ActionTypeEnum.Add,
    data: Itask
  }