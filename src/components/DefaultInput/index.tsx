import style from './styles.module.css';

type InputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ id, labelText, type, ...rest }: InputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input className={style.input} type={type} id={id} {...rest} />
    </>
  );
}
