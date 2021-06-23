import React from 'react';
import {SafeAreaView} from 'react-native';
//import HolaMundoScreen from './src/screens/HolaMundoScreen';
//import { ContadorScreen } from './src/screens/ContadorScreen';
//import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
//import { CimensionesScreen } from './src/screens/DimensionesScreen';
// import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      {/* <HolaMundoScreen /> */}
      {/* <ContadorScreen /> */}
      {/* <BoxObjectModelScreen/> */}
      {/* <CimensionesScreen/> */}
      {/* <PositionScreen/> */}
      <FlexScreen/>
    </SafeAreaView>
  );
};
