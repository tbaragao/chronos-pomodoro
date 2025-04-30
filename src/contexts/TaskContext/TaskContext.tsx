import { TaskStateModel } from '../../models/TaskStateModel.ts';
import { initialTaskState } from './initialTaskState.ts';
import { createContext } from 'react';

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContextValue = {
  state: initialTaskState,
  setState: () => {},
};

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
