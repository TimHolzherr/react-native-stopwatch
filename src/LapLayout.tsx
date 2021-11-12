import React, {memo} from 'react';

import LapRow from './LapRow';
import {ScrollView} from 'react-native';
import styled from '@emotion/native';

const LapButton = styled.View`
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 100px;
  background-color: #3d3d3d;
  position: relative;
`;

const LapButtonContainer = styled.View`
  width: 50%;
  align-items: flex-start;
`;

const LapContainer = styled.View`
  flex: 1.8;
  margin: 0px 30px 0px 30px;
`;

const LapLayout = () => {
  return (
    <LapContainer>
      <ScrollView>
        <LapRow></LapRow>
        <LapRow></LapRow>
        <LapRow></LapRow>
        <LapRow></LapRow>
        <LapRow></LapRow>
        <LapRow></LapRow>
        <LapRow></LapRow>
        <LapRow></LapRow>
      </ScrollView>
    </LapContainer>
  );
};

export default memo(LapLayout);
