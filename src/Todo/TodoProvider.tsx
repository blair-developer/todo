import React, { createContext } from 'react';
import { Itask } from './types';

export const TodoContext = createContext<{activeTasks : Itask[]}>({activeTasks : []});

type Props = {
    children : React.ReactNode;
};

const TodoProvider = (props: Props) => {
const tasks: Itask[]= [
    {
        id: "1",
        title: "Task 1",
        isFav: true
    },
    {
        id: "1",
        title: "task 2",
        isFav: false
    },
    {
        id: "3",
        title: "task 3",
        isFav: false
    }
];


  return (
    <TodoContext.Provider value={{activeTasks : tasks}}>
       {props.children}
    </TodoContext.Provider>
  )
}

export default TodoProvider
