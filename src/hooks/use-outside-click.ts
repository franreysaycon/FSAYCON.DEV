import { useEffect, RefObject } from 'react'

type Event = MouseEvent | TouchEvent

function useClickOutside<T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: (event: Event) => void): void {
  useEffect(() => {
    const listener = (event: Event) => {
      event.stopPropagation()
      const el = ref?.current

      if (!el || el.contains((event?.target as Node) || null)) {
        return
      }
      handler(event)
    }

    document.addEventListener(`mousedown`, listener)
    document.addEventListener(`touchstart`, listener)

    return () => {
      document.removeEventListener(`mousedown`, listener)
      document.removeEventListener(`touchstart`, listener)
    }

    }, [ref, handler])
}

export default useClickOutside
