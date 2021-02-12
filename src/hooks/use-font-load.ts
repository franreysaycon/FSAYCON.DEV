import { useEffect, useState } from "react"
import FontFaceObserver from "fontfaceobserver"

interface FontStatus {
  fontLoaded: boolean;
}

function useFontLoad(fonts: string[]): FontStatus  {

    const [fontLoaded, setFontLoaded] = useState(false)
    useEffect(() => {
        const loadFonts = async (): Promise<void> => {
            const observers = fonts.map(font => new FontFaceObserver(font))
            const fontPromises = observers.map(obs => obs.load())
            await Promise.all(fontPromises)
            setFontLoaded(true)
        }
        loadFonts()
    }, [fonts, fontLoaded]) 

    return { fontLoaded }
}

export default useFontLoad
