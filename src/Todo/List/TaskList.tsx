import React, { useContext } from 'react'
import TaskListStyle from './TaskList.style';
import { Checkbox, FontIcon, Stack, mergeStyles } from '@fluentui/react';
import { TodoContext } from '../TodoProvider';
import { Itask } from '../types';


const TaskList = () => {

    const { activeTasks } = useContext(TodoContext);

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
       {activeTasks.map(onRenderCell)}
    </div>
  );
}

export default TaskList;
