import { useState } from 'react';
import { initialTaskState } from './initialTaskState.ts';
import { TaskContext } from './TaskContext.tsx';

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, setState] = useState(initialTaskState);

  return (
    <>
      <TaskContext.Provider value={{ state, setState }}>
        {children}
      </TaskContext.Provider>
    </>
  );
}