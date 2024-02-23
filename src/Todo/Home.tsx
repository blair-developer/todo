import React, { createContext, useState } from 'react'
import HomeStyle from './Home.style';
import TodoString from "./String.json";
import { DefaultButton, FontIcon, Label, Pivot, PivotItem, Stack } from '@fluentui/react';
import { Itask, PivotKeysEnum } from './types';
import TaskList from './List/TaskList';

import { initializeIcons } from '@fluentui/react';
import TodoProvider from './TodoProvider';
import TaskForm from './TaskForm/TaskForm';
import TaskListStyle from './List/TaskList.style';
initializeIcons();

export const TodoContext = createContext<{activeTasks : Itask[]}>({activeTasks : []});

const Home = () => {

    const [selectedKey, setselectedKey] = useState<string>(PivotKeysEnum.Tasks);

  return (
    <Stack className={HomeStyle.todoContainer}>
        <TodoProvider>
       <header className={HomeStyle.headerStyle}>
           <h2>{TodoString.header}</h2>
           {/* Social icons */}
           <Stack horizontal tokens={{childrenGap: 10}}>
               <FontIcon iconName="Facebook" style={{fontSize: '20px'}} />
               <FontIcon iconName="Twitter" style={{fontSize: '20px', color: 'red'}} />
               <FontIcon iconName="LinkedIn" style={{fontSize: '20px'}} />
           </Stack>
       </header>
       <Stack className={HomeStyle.pivotContainer}>
       <Pivot selectedKey={String(selectedKey)}
         styles={{root: HomeStyle.pivotRoot}}
         onLinkClick={(item?: PivotItem) => {
             setselectedKey(item?.props.itemKey || PivotKeysEnum.Tasks)
         }}
       >
        <PivotItem headerText={TodoString.pivots.tasksTab} itemKey={PivotKeysEnum.Tasks}>
          <TaskList/>
        </PivotItem>
        <PivotItem headerText={TodoString.pivots.taskFormTab} itemKey={PivotKeysEnum.TaskForm}>
          <TaskForm/> 
        </PivotItem>
        <PivotItem headerText={TodoString.pivots.completedTaskTab} itemKey={PivotKeysEnum.Completed}>
          <Label>#under_development</Label>
        </PivotItem>
        
      </Pivot>
      </Stack>
      </TodoProvider>
    </Stack>

  );
}

export default Home;
