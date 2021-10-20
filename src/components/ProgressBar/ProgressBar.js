/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--width": 370 + "px",
    "--height": 8 + "px", 
    "--borderRadius": 4 + "px",
  },
  medium: {
    "--width": 370 + "px",
    "--height": 12 + "px",
    "--borderRadius": 4 + "px",
  },
  large: {
    "--width": 370 + "px",
    "--height": 24 + "px",
    "--borderRadius": 8 + "px",
    "--padding": 4 + "px",
  }
}

const ProgressBarWrapper = styled.div`
  border-radius: var(--borderRadius);
  padding: var(--padding, 0px);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const StyledProgressBarWrapper = styled.div`
  height: var(--height);
  overflow: hidden;
  border-radius: 4px;
`;

const StyledProgressBar = styled.div`
  width: var(--value);
  height: 100%;
  background-color: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
`;

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
  <ProgressBarWrapper style={styles}>
    <StyledProgressBarWrapper>
      <StyledProgressBar style={{
        '--value': value + "%",
      }}/>
    </StyledProgressBarWrapper>
  </ProgressBarWrapper>);
};

export default ProgressBar;
