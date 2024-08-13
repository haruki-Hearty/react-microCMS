import styles from './ContainerLarge.module.scss'

export const ContainerLarge = (props) => {
  const { children } = props;
  return (
    <div className={styles.large}>
      { children }
    </div>
  )
}
