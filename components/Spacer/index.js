import { memo } from "react"
import styles from "./spacer.module.css"

export const Spacer = ({
  x = 1,
  y = 1,
  expand,
  className,
  inline,
  padding
}) => {
  return (
    <span
      className={`${styles.spacer} ${className || ""} ${
        inline ? styles.inline : ""
      } ${padding ? styles.padding : ""}`}
      style={{
        flex: expand ? "1" : undefined,
        marginLeft: x !== 1 ? `${x * 4.444}vw` : undefined,
        marginTop: y !== 1 && !inline ? `${y * 4.444}vw` : undefined,
        paddingLeft: padding ? `${x * 4.444}vw` : undefined,
        paddingTop: padding && !inline ? `${y * 4.444}vw` : undefined
      }}
    />
  )
}

export default memo(Spacer)
