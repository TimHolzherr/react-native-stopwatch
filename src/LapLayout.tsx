import React, {memo} from 'react';

import LapRow from './LapRow';
import OtherLaps from './otherLaps';
import {ScrollView} from 'react-native';
import styled from '@emotion/native';

const LapContainer = styled.View`
  flex: 1.8;
  margin: 0px 30px 0px 30px;
`;

type LapLayoutProps = {
  laps: string[];
  time: string;
  running: boolean;
};

const LapLayout = ({laps, time, running}: LapLayoutProps) => {
  return (
    <LapContainer>
      <ScrollView>
        {running ? (
          <LapRow key={-1} lap={time} color="#fff" index={laps.length + 1} />
        ) : null}
        <OtherLaps laps={laps} />
      </ScrollView>
    </LapContainer>
  );
};

export default memo(LapLayout);
