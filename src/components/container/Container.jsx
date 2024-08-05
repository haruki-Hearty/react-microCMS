import styles from './Container.module.scss'

export const Container = (props) => {
  const { children, large = false } = props;
  return (
    <div className={large ? styles.large : styles.default}>
      { children }
    </div>
  )
}
