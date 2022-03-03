import { ReactNode, CSSProperties } from "react";

import styles from "./styles.module.css";

type #NAMEProps = {
  className?: string,
  style?: CSSProperties
  children?: ReactNode,
};

export default function #NAME({className, style, children}: #NAMEProps) {
  return <div style={style} className={`${className ?? ""} ${styles.#NAME}`}>{children}</div>
}
