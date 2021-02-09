import { useEffect } from "react"

function useKeyDown(callback: () => void, key: string): void {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === key) {
        callback()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])
}

export default useKeyDown
