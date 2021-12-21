import cx from 'classnames'
import { ButtonHTMLAttributes, Ref } from 'react'

import styles from './IconButton.module.scss'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  'aria-label': string
  nodeRef?: Ref<HTMLButtonElement>
}

export default function IconButton({ className, ...rest }: Props) {
  return <button className={cx(className, styles.root)} type="button" {...rest} />
}
