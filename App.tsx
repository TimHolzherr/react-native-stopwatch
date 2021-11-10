import { Button, Pressable, Text } from 'react-native';
import React, { useState } from 'react';
import styled, { css } from '@emotion/native'

import { useStopwatch } from './src/useStopwatch';

const Top = styled.View`
  height: 50%;
  justify-content: center;  
  align-items: center;
  background-color: #000;  
`

const Bottom = styled.View`
height: 50%;
justify-content: center;  
background-color: #000; 
`

const Timer = styled.Text`
  color: #fff;
  fontSize: 84px;
  font-family: 'lucida grande'; // TODO: How do I change to another system font?
`

const RoundButton = css`
  border-radius: 50px;
  background-color: green;
  boarder-width: 20px;
  boarder-color: green;  
  width: 100px;
  height: 100px;
`

const App = () => {
  var [watch, setWatch] = useState("00:00:00");
  var {start, reset} = useStopwatch(setWatch);
   return <>
     <Top>
       <Timer>{watch}</Timer>
     </Top>
     <Bottom>
       <Button title="Start" onPress={start}/>
       <Text> --- </Text>
       <Button title="Reset" onPress={reset}/>
     </Bottom>
   </>;
 };

 
 export default App;