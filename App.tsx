import React, {useState} from 'react';

import ButtonLayout from './src/ButtonLayout';
import LapLayout from './src/LapLayout';
import styled from '@emotion/native';
import {useStopwatch} from './src/useStopwatch';

const Top = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

const Bottom = styled.View`
  flex: 1;
  background-color: #000;
`;

const Timer = styled.Text`
  color: #fff;
  font-size: 84px;
  font-family: arial; // TODO: How do I change to another system font?
`;

const App = () => {
  var [watch, setWatch] = useState('00:00:00');
  var [lastLap, setLastLap] = useState('00:00:00');
  var {start, reset, takeLap, stop, laps, running} = useStopwatch(
    setWatch,
    setLastLap,
  );

  return (
    <>
      <Top>
        <Timer>{watch}</Timer>
      </Top>
      <Bottom>
        <ButtonLayout
          running={running}
          start={start}
          reset={reset}
          takeLap={takeLap}
          stop={stop}
        />
        <LapLayout laps={laps} time={lastLap} running={running} />
      </Bottom>
    </>
  );
};

export default App;
