import style from './styles.module.css';

type ButtonProps = {
  icon: React.ReactNode;
  color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

export function DefaultButton({ icon, color = 'green', ...rest }: ButtonProps) {
  return (
    <>
      <button className={`${style.button} ${style[color]}`} {...rest}>
        {icon}
      </button>
    </>
  );
}
