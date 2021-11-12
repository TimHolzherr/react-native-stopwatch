import React from 'react';
import styled from '@emotion/native';

const LapContainer = styled.View`
  height: 50px;
  border-color: #3d3d3d;
  border-width: 1px 0px 1px 0px;
  flex-direction: row;
`;

const LeftContainer = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
`;

const RightContainer = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: center;
`;

const LeftText = styled.Text`
  color: #fff;
  font-size: 24px;
`;

const RightText = styled.Text`
  color: #fff;
  font-size: 24px;
`;

type LapRowProps = {
  lap: string;
  index: number;
  color: string;
};

const LapRow = ({lap, index, color}: LapRowProps) => {
  return (
    <LapContainer>
      <LeftContainer>
        <LeftText style={{color: color}}>Lap {index}</LeftText>
      </LeftContainer>
      <RightContainer>
        <RightText style={{color: color}}>{lap}</RightText>
      </RightContainer>
    </LapContainer>
  );
};

export default LapRow;
