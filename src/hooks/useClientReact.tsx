import { useCallback, useState } from 'react'
export default function useClientRect() {
  const [rect, setRect] = useState(null)
  const [node, setNode] = useState(null)
  const refElement = useCallback((node) => {
    if (node) {
      setNode(node)
      setRect(node.getBoundingClientRect().toJSON())

      const resizeObserver = new ResizeObserver((entries) => {
        if (entries.length) {
          setRect(entries[0].target.getBoundingClientRect().toJSON())
        }
      })

      resizeObserver.observe(node)

      return () => {
        resizeObserver.unobserve(node)
        resizeObserver.disconnect()
      }
    }
  }, [])
  return [rect, refElement, node, setNode]
}
