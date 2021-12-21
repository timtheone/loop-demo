import { useEffect, useState } from 'react'

import Sailor from '../../Types/Sailor'
import { ReactComponent as Spinner } from '../Icons/Spinner.svg'
import styles from './Team.module.scss'
import TeamFilter from './TeamFilter'
import TeamList from './TeamList'

export default function Team() {
  const [initialSailors, setInitialSailors] = useState<Array<Sailor>>([])
  const [sailors, setSailors] = useState<Array<Sailor>>([])
  const filters = ['show all', 'trim', 'tactic', 'helmsman']
  const [selectedFilter, setSelectedFilter] = useState<string>(filters[0])
  useEffect(() => {
    fetch('/sailor_team.json')
      .then((response) => response.json())
      .then((data) => {
        setInitialSailors(data)
        setSailors(data)
      })
  }, [])

  const filterHandler = (term: string) => {
    setSelectedFilter(term)
    if (!selectedFilter.includes(term)) {
      if (term === filters[0]) {
        setSailors(initialSailors)
      } else {
        setSailors(() =>
          initialSailors.filter((sailor) => {
            return sailor.duty_slugs.includes(term)
          })
        )
      }
    }
  }

  return (
    <section className={styles.root}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>UNSER TEAM</h2>
        <h4 className={styles.subtitle}>SUBTITLES VON UNSEREM TEAM</h4>
      </div>
      {sailors.length > 0 ? (
        <>
          <TeamFilter
            filters={filters}
            selectedFilter={selectedFilter}
            filterHandler={filterHandler}
          />
          <TeamList entries={sailors} rerender={selectedFilter} />
        </>
      ) : (
        <span className={styles.spinner}>{<Spinner />}</span>
      )}
    </section>
  )
}
