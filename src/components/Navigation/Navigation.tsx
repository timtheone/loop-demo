import { lazy, Suspense, useCallback, useState } from 'react'

import IconButton from '../Button/IconButton'
import { ReactComponent as Flag } from './Flag.svg'
import { ReactComponent as Hamburger } from './Hamburger.svg'
import styles from './Navigation.module.scss'
const NavigationSideBar = lazy(() => import('./NavigationSideBar'))

export default function Navigation() {
  const navigationData = ['About us', 'Gallery', 'Crew', 'Kontakt']

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const onToggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev)
  }, [])

  return (
    <nav className={styles.root}>
      <ul className={styles.list}>
        {navigationData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <IconButton
        aria-label="showSidebar"
        className={styles.sidebarButton}
        onClick={onToggleSidebar}
      >
        <Hamburger />
      </IconButton>
      <div className={styles.logoContainer}>
        <Flag />
        <p className={styles.branding}>
          Segel<span>Team</span>
        </p>
      </div>
      {isSidebarOpen && (
        <Suspense fallback={<div></div>}>
          <NavigationSideBar
            entries={navigationData}
            isOpen={isSidebarOpen}
            onClose={onToggleSidebar}
          />
        </Suspense>
      )}
    </nav>
  )
}
