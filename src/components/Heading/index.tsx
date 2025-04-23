import styles from './styles.module.css';

type HeadingProps = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
  return (
    <>
      <h1 className={styles.heading}>{children}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        blanditiis cumque cupiditate, ea earum est eum exercitationem explicabo
        fugiat fugit in, ipsa laboriosam neque placeat, quam quis repellat
        temporibus? Omnis!
      </p>
    </>
  );
}
