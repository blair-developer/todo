import { MessageBar, MessageBarType, PrimaryButton, Stack, TextField } from '@fluentui/react'
import React, { useContext, useEffect, useState } from 'react'
import useInput from './useinput';
import { TodoContext } from '../TodoProvider';
import { ActionTypeEnum, Itask } from '../types';

const TaskForm = () => {
const {dispatch} = useContext(TodoContext);

const [showMessage, setshowMessage] = useState<{type: MessageBarType, message: string}>({type: MessageBarType.success, message: ""});
const title = useInput("");
const description = useInput("");

useEffect(() => {
   if (showMessage.message) {
     setTimeout(() => {
        setshowMessage({ type: MessageBarType.success, message: ""});
     }, 1000);
   }
}, [showMessage.message])

const onFormSubmit = (event : React.FormEvent) => {
   event.preventDefault();
   const data: Itask = {id: "", title : title.value, description: description.value, isFav: false};
   dispatch({type : ActionTypeEnum.Add, data: {}});
   setshowMessage({type: MessageBarType.success, message: "Task Added"})
}

  return (
    <form onSubmit={onFormSubmit}>
         <TextField label="Title" required {...title}/>
         <TextField label="Description" multiline rows={4} {...description}/>
         <Stack horizontal tokens={{childrenGap: 20}} style={{marginTop: 20}}>
            <Stack style={{width : "80%"}}>
              {showMessage.message && (
              <MessageBar messageBarType={MessageBarType.success}>Task added succesful</MessageBar>
            )}
              
            </Stack>
            <Stack style={{width : "20%"}}>
              <PrimaryButton type='submit' text="Add Task"/>
            </Stack>
           
       
         </Stack>
    </form>
  )
}

export default TaskForm
