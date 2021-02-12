import { motion } from "framer-motion"
import usePreloadImage from "hooks/use-preload-image"
import React, { useEffect, useState } from "react"
import styled from "styled-components"

const StyledImage = styled(motion.img)`
  width: 25rem;
  position: relative;
  top: 50px;
`

const placeholderSrc = '/placeholder.png'
const heroSrc = '/hero.png'

const HeroImage: React.FC = () => {

  const [imageSrc, setImageSrc] = useState<string>(placeholderSrc)
  const placeholderLoaded = usePreloadImage(placeholderSrc)
  const heroLoaded = usePreloadImage(heroSrc)

  const showImage = ( imageSrc === placeholderSrc && placeholderLoaded ) || heroLoaded

  useEffect(() => {
    if (heroLoaded){
      setImageSrc(heroSrc)
    }
  }, [heroLoaded])

  return (
    <>
      { showImage && (
        <StyledImage
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ ease: "easeIn", duration: 0.75, delay: 0.5 }}
          src={imageSrc}
          alt="fsaycon.dev hero image that shows a cyborg version of myself solving an advanced rubix cube"
        />
      )}
    </>
  )
}

export default HeroImage
