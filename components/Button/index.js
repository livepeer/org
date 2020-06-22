import styles from "./button.module.css"

const Button = ({ children, action = () => {} }) => {
  return (
    <button className={styles.button} onClick={action}>
      {children}
    </button>
  )
}

export default Button
