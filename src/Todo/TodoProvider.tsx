import React, { createContext, useReducer } from 'react';
import { ActionTypeEnum, IAddAction, ITodoContext, ITodoState, Itask } from './types';

export const TodoContext = createContext<ITodoContext>({
    activeTasks : [],
    dispatch: () => {}
});

type Props = {
    children : React.ReactNode;
};

const reducer = (state: ITodoState, action: IAddAction) => {
    console.log(state);
    console.log(action);

    switch(action.type){
        case ActionTypeEnum.Add: 
        const {data} = action;
        data.id = new Date().toJSON();
        return {...state, activeTasks: [action.data, ...state.activeTasks]}
    }
    return {...state};
};


const TodoProvider = (props: Props) => {
const tasks: Itask[]= [
    {
        id: "1",
        title: "Task 1",
        description: "desc",
        isFav: true
    },
    {
        id: "1",
        title: "task 2",
        description: "desc",
        isFav: false
    },
    {
        id: "3",
        title: "task 3",
        description: "desc",
        isFav: false
    }
];
const data = { activeTasks: tasks,};
const [state, dispatch] = useReducer(reducer, data);
  return (
    <TodoContext.Provider value={{activeTasks: state.activeTasks, dispatch}}>
       {props.children}
    </TodoContext.Provider>
  )
}

export default TodoProvider
