import { Box } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { TaskHeader } from './_taskHeader';
import { TaskDescription } from './_taskDescription';
import { TaskFooter } from './_taskFooter';
import { ITask } from './interfaces/ITask';
import { Priority } from '../createaskForm/enums/Priority';
// import { Status } from '../createaskForm/enums/Status';
import { renderPriorityBorderColor } from './helpers/renderPriorityBorderColor';
import { Status } from '../createaskForm/enums/Status';

export const Task: FC<ITask> = (props): ReactElement => {
  const {
    title = 'test Title',
    date = new Date(),
    description = 'Lorem description to be Display',
    priority = Priority.low,
    status = Status.todo,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
    id,
  } = props;
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={4}
      p={2}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: renderPriorityBorderColor(priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter
        id={id}
        status={status}
        onClick={onClick}
        onStatusChange={onStatusChange}
      />
    </Box>
  );
};
