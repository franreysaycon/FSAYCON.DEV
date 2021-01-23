import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { animated, useSpring } from 'react-spring';

const CUBE_TOP_ADJUSTMENTS = 30;
const CUBE_LEFT_ADJUSTMENTS = 23;

const cubeAnimation = keyframes`
  0% { top: ${CUBE_TOP_ADJUSTMENTS}%; opacity: 1; }
  25% { opacity: 0.8; }
  50% { top: ${CUBE_TOP_ADJUSTMENTS + 2}%; opacity: 1; }
  75% { opacity: 0.8; }
  100% { top: ${CUBE_TOP_ADJUSTMENTS}%; opacity: 1; }
`;

const Placeholder = styled.img`
  width: 25rem;
  blur: 10px;
`;

const MechSuit = styled.img`
  width: 25rem;
`;

const Cube = styled.img`
  position: absolute;
  width: 13rem;
  z-index: 1;
  top: ${CUBE_TOP_ADJUSTMENTS}%;
  left: ${CUBE_LEFT_ADJUSTMENTS}%;
  animation-name: ${cubeAnimation};
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

const Container = styled(animated.div)`
  display: flex;
  position: relative;
  width: 25rem;
`;

const HeroArt = () => {
  const [imageSpring, setImageSpring] = useSpring(() => ({ blur: '10px' }));
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [cubeLoaded, setCubeLoaded] = useState(false);
  const isHeroReady = heroLoaded && cubeLoaded;

  useEffect(() => {
    const preloadMechSuitImage = new Image();
    preloadMechSuitImage.src = "/hero.png";
    const preloadCubeImage = new Image();
    preloadCubeImage.src = "/cube.png";

    preloadMechSuitImage.onload = () => {
      setHeroLoaded(true);
    };

    preloadCubeImage.onload = () => {
      setCubeLoaded(true);
    };
  }, []);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      if (isHeroReady) {
        setImageSpring({ blur: '0px' });
      }
    }, 1000);
    return () => {
      clearTimeout(delayTimer);
    };
  }, [isHeroReady]);

  return (
    <Container>
      {
        isHeroReady
          ? (
            <>
              <MechSuit style={imageSpring} src="/hero.png" alt="Fantasy drawing of Franrey Saycon in a sci-fi mechanic suit with a robot helper." />
              <Cube style={imageSpring} src="/cube.png" alt="Glowing mechanical puzzle cube." />
            </>
          )
          : <Placeholder src="/placeholder.png" alt="Placeholder image for the incoming hero art." />
      }
    </Container>
  );
};

export default HeroArt;