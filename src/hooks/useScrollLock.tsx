import { useLayoutEffect } from 'react'

/**
 * Prevents the document from scrolling.
 */
export default function useScrollLock(isActive = true) {
  useLayoutEffect(() => {
    if (!isActive) return

    const { body, documentElement } = document
    const prevDocumentOverflow = documentElement.style.overflow
    const prevBodyOverflow = body.style.overflow

    documentElement.style.overflow = body.style.overflow = 'hidden'

    return () => {
      documentElement.style.overflow = prevDocumentOverflow
      body.style.overflow = prevBodyOverflow
    }
  }, [isActive])
}
