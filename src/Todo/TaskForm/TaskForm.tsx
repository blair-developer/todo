import { MessageBar, MessageBarType, PrimaryButton, Stack, TextField } from '@fluentui/react'
import React, { useState } from 'react'

const TaskForm = () => {
const [title, setTitle] = useState("");
const [description, setdescription] = useState("");

const onTitleChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTitle(event.currentTarget.value);
}
const onDescriptionChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setdescription(event.currentTarget.value);
}

  return (
    <Stack>
         <TextField label="Title" required  value={title}/>
         <TextField label="Description" multiline rows={4} value={description}/>
         <Stack horizontal tokens={{childrenGap: 20}} style={{marginTop: 20}}>
            <Stack style={{width : "80%"}}>
            <MessageBar messageBarType={MessageBarType.success}>Task added succesful</MessageBar>
            </Stack>
            <Stack style={{width : "20%"}}>
              <PrimaryButton text="Add Task"/>
            </Stack>
           
       
         </Stack>
    </Stack>
  )
}

export default TaskForm
