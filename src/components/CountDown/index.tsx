import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import style from './styles.module.css';

export function CountDown() {
  const { state, setState } = useTaskContext();
  return (
    <>
      <div className={style.container}>{state.formattedSecondsRemaining}</div>
    </>
  );
}
