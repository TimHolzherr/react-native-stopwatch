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
  align-items: center;
`;

const Timer = styled.Text`
  color: #fff;
  font-size: 84px;
  font-family: arial; // TODO: How do I change to another system font?
`;

const RoundButton = styled.View`
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 100px;
  background-color: #1b361f;
  position: relative;
`;

const Boarder = styled.View`
  border-width: 3px;
  content: '';
  position: absolute;
  left: 2px;
  top: 2px;
  border-radius: 100px;
  width: 96px;
  height: 96px;
  border-color: black;
`;

const ButtonText = styled.Text`
  font-size: 24px;
  color: #50d137;
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
        <Pressable onPress={running ? reset : start}>
          <RoundButton
            style={{backgroundColor: running ? '#420e0d' : '#1b361f'}}>
            <Boarder />
            <ButtonText style={{color: running ? '#ef4f4d' : '#50d137'}}>
              {running ? 'Reset' : 'Start'}
            </ButtonText>
          </RoundButton>
        </Pressable>
      </Bottom>
    </>
  );
};

export default App;
