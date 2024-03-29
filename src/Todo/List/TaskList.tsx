import React, { useContext } from 'react'
import TaskListStyle from './TaskList.style';
import { Checkbox, FontIcon, Stack, mergeStyles } from '@fluentui/react';
import { TodoContext } from '../TodoProvider';
import { ActionTypeEnum, Itask } from '../types';
import TodoString from '../String.json';

const TaskList = () => {

    const { activeTasks, dispatch } = useContext(TodoContext);

    const onTaskDelete = (id: string) => {
        if (window.confirm(TodoString.deleteConfirm)) {
          dispatch ({ type: ActionTypeEnum.Delete, data: {id}});
        }
    }

    const onRenderCell = (task: Itask) => {
        return(
         <Stack horizontal key={task.id} className={TaskListStyle.taskItem}>
            <Stack horizontal style={{width: "85%"}}>
            <Checkbox />
            {task.title}
            </Stack>
            <Stack horizontal style={{width: "15%"}}>
              <FontIcon iconName="info" className={TaskListStyle.iconStyle} />
              {/*<FontIcon iconName={task.isFav ? "FavoriteStarFill" : "FavoriteStar"} className={TaskListStyle.iconStyle} /> */}
              <FontIcon iconName="EditNote" className={TaskListStyle.iconStyle} />
              <FontIcon iconName="Delete" className={TaskListStyle.iconStyle} onClick={() => onTaskDelete(task.id)} />
              
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
