import cx from 'classnames'
import { memo } from 'react'

import useDebounced from '../../hooks/useDebounced'
import useScrollLock from '../../hooks/useScrollLock'
import IconButton from '../Button/IconButton'
import { ReactComponent as Close } from './Close.svg'
import styles from './NavigationSidebar.module.scss'

type Props = {
  className?: string
  isOpen: boolean
  entries: Array<string>
  onClose(): void
}

function NavigationPortalSidebar({ entries, className, isOpen, onClose }: Props) {
  useScrollLock(isOpen)

  // Delay the animation so if `isOpen` is `true` initially, the animation runs
  // nonetheless. Due to component being loaded only on action, we delay the animation to
  // let the browser repaint and reflow, otherwise there is no point of reference ot initila css transoform.
  const animateOpen = useDebounced(isOpen, 50)

  return (
    <div className={cx(className, styles.root, animateOpen && styles.root_open)}>
      <IconButton aria-label="close" className={styles.closeButton} onClick={onClose}>
        <Close />
      </IconButton>
      <ul className={styles.list}>
        {entries.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default memo(NavigationPortalSidebar)
