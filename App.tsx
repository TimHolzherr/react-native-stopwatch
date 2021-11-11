import {Pressable, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';

import LapRow from './src/LapRow';
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

const ButtonContainer = styled.View`
  flex: 1;
  padding: 40px 30px 0px 30px;
  width: 100%;
  flex-direction: row;
`;

const StartStopButton = styled.View`
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 100px;
  background-color: #1b361f;
  position: relative;
`;

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

const StartResetButtonContainer = styled.View`
  width: 50%;
  align-items: flex-end;
`;
const LapButtonContainer = styled.View`
  width: 50%;
  align-items: flex-start;
`;

const LapContainer = styled.View`
  flex: 1.8;
  margin: 0px 30px 0px 30px;
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
        <ButtonContainer>
          <LapButtonContainer>
            <Pressable style={{alignItems: 'flex-end'}}>
              <LapButton>
                <Boarder />
                <ButtonText style={{color: '#fff'}}>
                  {running ? 'Lap' : 'Reset'}
                </ButtonText>
              </LapButton>
            </Pressable>
          </LapButtonContainer>
          <StartResetButtonContainer>
            <Pressable
              style={{alignItems: 'flex-end'}}
              onPress={running ? reset : start}>
              <StartStopButton
                style={{backgroundColor: running ? '#420e0d' : '#1b361f'}}>
                <Boarder />
                <ButtonText style={{color: running ? '#ef4f4d' : '#50d137'}}>
                  {running ? 'Reset' : 'Start'}
                </ButtonText>
              </StartStopButton>
            </Pressable>
          </StartResetButtonContainer>
        </ButtonContainer>
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
      </Bottom>
    </>
  );
};

export default App;
