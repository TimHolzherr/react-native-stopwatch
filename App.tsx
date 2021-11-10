import {Button, Pressable, Text} from 'react-native';
import React, {useState} from 'react';
import styled, {css} from '@emotion/native';

import {useStopwatch} from './src/useStopwatch';

const Top = styled.View`
  height: 50%;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

const Bottom = styled.View`
  height: 50%;
  justify-content: center;
  background-color: #000;
`;

const Timer = styled.Text`
  color: #fff;
  font-size: 84px;
  font-family: arial; // TODO: How do I change to another system font?
`;

const RoundButton = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 100px;
  boarder-color: green;
  boarder-width: 50px;
  background-color: orange;
`;

const App = () => {
  var [watch, setWatch] = useState('00:00:00');
  var {start, reset, running} = useStopwatch(setWatch);
  return (
    <>
      <Top>
        <Timer>{watch}</Timer>
      </Top>
      <Bottom>
        <RoundButton>
          <Text>Foo</Text>
        </RoundButton>
        {!running ? (
          <Button title="Start" onPress={start} />
        ) : (
          <Button title="Reset" onPress={reset} />
        )}
      </Bottom>
    </>
  );
};

export default App;
