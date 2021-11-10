import { Button, Text } from 'react-native';
import React, { useState } from 'react';

import styled from '@emotion/native'
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
align-items: center;
background-color: #000; 
`


const Timer = styled.Text`
  color: #fff;
  fontSize: 84px;
  font-family: 'lucida grande'; // TODO: How do I change to another system font?
`

const App = () => {
  var [watch, setWatch] = useState("00:00:00");
  var {start, reset} = useStopwatch(setWatch);
   return <>
     <Top>
       <Timer>{watch}</Timer>
     </Top>
     <Bottom>
       <Button title="Start" onPress={start}></Button> 
       <Button title="Reset" onPress={reset}></Button>
       <Text>Scroll</Text>
     </Bottom>
   </>;
 };

 
 export default App;