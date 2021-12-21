import { useEffect, useState } from 'react'

import useClientRect from '../../hooks/useClientReact'
import useDebounced from '../../hooks/useDebounced'
import Sailor from '../../Types/Sailor'
import styles from './TeamList.module.scss'

type Props = {
  entries: Array<Sailor>
  rerender: string
}

export default function TeamList({ entries, rerender }: Props) {
  const [rect, refElement, node, setNode] = useClientRect()
  // delay the calculating rect to not trigger effets immediately on updates for performance
  const debouncedValue = useDebounced(rect, 500)
  const [elementsShown, setElementsShown] = useState(10)

  const showMoreHandler = () => {
    setElementsShown((prev) => prev + 5)
  }
  /*
  when filtering is triggered we want to reAssign container, if we don't do this
  we dont get updated bounding client rect data.
  */
  useEffect(() => {
    if (refElement) {
      //@ts-ignore
      setNode(refElement)
    }
  }, [rerender])

  useEffect(() => {
    let prevNode = 0
    let prevNodeElement: HTMLDivElement
    /*
        Determining the most right element in the given flex row, so we can change hover behaviour,
        (Basic use case: on hover show the description card and slide it to the right)
        (Last item in the row use case: on hover we want to show the description card and slide it to the LEFT)

        Calculating the boundingClient on each element ->
            If current element right position is bigger than previous element,
            it would mean that that the current element is located to the left of the previous

            If not, that would mean that current element is the last element in the row.

        @ts-ingores here are mostly due to useRef.current not having properties of HTMLELement
    */
    //@ts-ignore
    if (node && node.getBoundingClientRect().height > 20) {
      //@ts-ignore
      ;[...node.children].forEach((element, index, array) => {
        if (element.classList.contains(styles['slideLeft'])) {
          element.classList.remove(styles['slideLeft'])
        }

        if (!element.classList.contains(styles['slideRight'])) {
          element.classList.add(styles['slideRight'])
        }

        if (prevNode < element.getBoundingClientRect().right) {
          prevNode = element.getBoundingClientRect().right
          prevNodeElement = element
        } else {
          prevNodeElement.classList.remove(styles['slideRight'])
          prevNodeElement.classList.add(styles['slideLeft'])
          prevNode = 0
        }

        if (index === array.length - 1) {
          if (!element.classList.contains(styles['slideLeft'])) {
            element.classList.remove(styles['slideRight'])
            element.classList.add(styles['slideLeft'])
          }
        }
      })
    }
  }, [debouncedValue])
  return (
    <>
      {/* added ts-ignore here because, for this use case useClientReact needs some
       advanced typing on useCallback and SetStateActions, which i didnt want to spend time on */}
      {/* @ts-ignore */}
      <div className={styles.teamListItemContainer} ref={refElement}>
        {entries.slice(0, elementsShown).map((entry, index) => (
          <div className={styles.teamListItem} key={index}>
            <img src={entry.image} alt={entry.name} />
            <div className={styles.description}>
              <div className={styles.description__text}>
                <p className={styles.name}>{entry.name}</p>
                <p>Duties: {entry.duties}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.showMoreButtonContainer}>
        {elementsShown < entries.length && (
          <button className={styles.showMoreButton} onClick={showMoreHandler}>
            Load More
          </button>
        )}
      </div>
    </>
  )
}
