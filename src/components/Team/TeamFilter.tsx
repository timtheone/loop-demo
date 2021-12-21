import cx from 'classnames'

import styles from './TeamFilter.module.scss'
type Props = {
  filters: Array<string>
  selectedFilter: string
  /*eslint no-unused-vars:*/
  filterHandler: (e: any) => void
}
export default function TeamFilter({ filters, selectedFilter, filterHandler }: Props) {
  return (
    <div className={styles.filtersContainer}>
      {filters.map((e, index) => (
        <span key={index}>
          <input
            type="radio"
            name="switch"
            checked={selectedFilter === e}
            className={styles.concealedSwitch}
            readOnly
          />
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
          <div
            onClick={() => filterHandler(e)}
            role="button"
            tabIndex={index}
            className={cx(
              styles.clickableLabel,
              selectedFilter === e ? styles.clickableLabel__active : ''
            )}
          >
            {e}
          </div>
        </span>
      ))}
    </div>
  )
}
