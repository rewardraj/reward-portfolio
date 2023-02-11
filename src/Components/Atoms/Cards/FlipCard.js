import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import ProgressBar from '../ProgressBar/ProgressBar';

const CardContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  perspective: 1000px;
  overflow: hidden;
  border-radius: 50%;
`;

const Card = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
 
  transition: transform 0.8s;
  transform-style: preserve-3d;
  ${({ flipped }) =>
    flipped
      ? css`
          transform: rotateY(180deg);
        `
      : css`
          transform: rotateY(0);
        `}
`;

const FlipCardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: ${(props) => props.cardColor || 'white'};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  // font-size: 21px;
  font-weight: bold;
  background-image: url(${({ frontImage }) => frontImage});
  background-size: ${({ imageSize }) => imageSize};
  background-repeat: no-repeat;
  background-position: center;
`;

const FlipCardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: ${(props) => props.cardColor || 'white'};
  color: var(--text-primary);
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const SkillLevel = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  display: flex;
  flex-direction: column;
`;


const FlipCard = ({
  frontImage,
  imageSize,
  cardColor,
  skillLevel,
  progress,
  height,
  bgcolor
}) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <CardContainer
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <Card flipped={flipped}>
        <FlipCardFront
          frontImage={frontImage}
          imageSize={imageSize}
          cardColor={cardColor}
        />
        <FlipCardBack
          cardColor={cardColor}
        >
          <SkillLevel>Skill Level: {skillLevel}
          <ProgressBar bgcolor={bgcolor} progress={progress} height={height}/>
          </SkillLevel>
          
        </FlipCardBack>
      </Card>
    </CardContainer>
  );
};

export default FlipCard;
