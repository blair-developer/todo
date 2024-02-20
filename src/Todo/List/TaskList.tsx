import React, { useContext } from 'react'
import TaskListStyle from './TaskList.style';
import { Checkbox, FontIcon, Stack, mergeStyles } from '@fluentui/react';


interface Itask {
    id: string;
    title: string;
    isFav: boolean;
}

const TaskList = () => {

    const tasks: Itask[]= [
        {
            id: "1",
            title: "Task 1",
            isFav: true
        },
        {
            id: "2",
            title: "task 2",
            isFav: false
        }
    ];

    const onRenderCell = (task: Itask) => {
        return(
         <Stack horizontal key={task.id} className={TaskListStyle.taskItem}>
            <Stack horizontal style={{width: "85%"}}>
            <Checkbox />
            {task.title}
            </Stack>
            <Stack horizontal style={{width: "15%"}}>
              <FontIcon iconName="info" className={TaskListStyle.iconStyle} />
              <FontIcon iconName={task.isFav ? "FavoriteStarFill" : "FavoriteStar"} className={TaskListStyle.iconStyle} />
              <FontIcon iconName="EditNote" className={TaskListStyle.iconStyle} />
              <FontIcon iconName="Delete" className={TaskListStyle.iconStyle} />
              
            </Stack>
        </Stack>
        );
    }
  return (
    <div>
       {tasks.map(onRenderCell)}
    </div>
  );
}

export default TaskList;
