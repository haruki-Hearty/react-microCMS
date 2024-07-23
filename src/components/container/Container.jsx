import styles from './Container.module.scss'

export const Container = (props) => {
  const { children } = props;
  return (
    <div className={styles.default}>
      { children }
    </div>
  )
}
