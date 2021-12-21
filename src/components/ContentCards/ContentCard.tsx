import cx from 'classnames'
import { ReactNode } from 'react'

import styles from './ContentCard.module.scss'

type Props = {
  classname?: string
  children: ReactNode
}

export default function ContentCard({ classname, children }: Props) {
  return <div className={cx(classname, styles.root)}>{children}</div>
}
