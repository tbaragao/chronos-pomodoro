import style from './styles.module.css';

export function Cycles() {
  return (
    <>
      <div className={style.container}>
        <span>Ciclos</span>
        <div className={style.cycleDots}>
          <span className={`${style.cycleDot} ${style.workTime}`}></span>
          <span className={`${style.cycleDot} ${style.shortBreakTime}`}></span>
          <span className={`${style.cycleDot} ${style.workTime}`}></span>
          <span className={`${style.cycleDot} ${style.shortBreakTime}`}></span>
          <span className={`${style.cycleDot} ${style.workTime}`}></span>
          <span className={`${style.cycleDot} ${style.shortBreakTime}`}></span>
          <span className={`${style.cycleDot} ${style.workTime}`}></span>
          <span className={`${style.cycleDot} ${style.longBreakTime}`}></span>
        </div>
      </div>
    </>
  );
}
