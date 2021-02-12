import { useEffect, useState } from "react"

function usePreloadImage(imageSrc: string): boolean {

  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    const image = new Image()
    image.src = imageSrc

    image.onload = () => {
      setLoaded(true)
    }
  }, [imageSrc])

  return loaded
}

export default usePreloadImage
