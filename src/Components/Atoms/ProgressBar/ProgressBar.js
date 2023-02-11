import React from 'react'
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  height: ${props => props.height};
  width: 100%;
  background-color: whitesmoke;
  border-radius: 50px;
  margin-top: 10px;
`

const ProgressBarChild = styled.div`
  height: 100%;
  width: ${props => `${props.progress}%`};
  background-color: ${props => props.bgcolor};
  border-radius: 40px;
  text-align: right;
`

const ProgressBarText = styled.span`
  padding: 10px;
  font-weight: 900;
`

const ProgressBar = ({bgcolor, progress, height}) => (
  <ProgressBarContainer height={height}>
    <ProgressBarChild progress={progress} bgcolor={bgcolor}>
      <ProgressBarText>{`${progress}%`}</ProgressBarText>
    </ProgressBarChild>
  </ProgressBarContainer>
)

export default ProgressBar;
