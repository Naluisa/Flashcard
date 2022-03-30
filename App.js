import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./src/stacks/DrawerNavigator";

import UserContextProvider from './src/contexts/UserContext';
import MainStack from './src/stacks/MainStack';
import MainTab from './src/stacks/MainTab';

export default () => {
  return(
    <UserContextProvider>
      <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer>
    </UserContextProvider>
  )
}