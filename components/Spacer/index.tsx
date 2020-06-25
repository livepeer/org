import { memo } from "react"
import styles from "./spacer.module.css"
import classNames from "classnames"

type Props = {
  x?: string | number
  y?: string | number
  className?: string
  expand?: boolean
  inline?: boolean
}

export const Spacer = ({
  x = 1,
  y = 1,
  className = "",
  expand = false,
  inline = false
}: Props) => (
  <span
    className={classNames([
      styles.spacer,
      className,
      { [styles.inline]: inline }
    ])}
    style={{
      flex: expand ? "1" : undefined,
      marginLeft:
        typeof x === "string" ? x : `calc(var(--spacing-base) * ${x})`,
      marginTop: typeof y === "string" ? y : `calc(var(--spacing-base) * ${y})`
    }}
  />
)

export default memo(Spacer)
