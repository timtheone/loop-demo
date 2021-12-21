import { ReactNode } from 'react'

import styles from './Wrapper.module.scss'

type Props = {
  children: ReactNode
}

export default function Wrapper({ children }: Props) {
  return <div className={styles.root}>{children}</div>
}
