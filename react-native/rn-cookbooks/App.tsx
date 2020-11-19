import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import Index from './views/Index'
import Detail from './views/detail/Detail'

import { store } from './store/Swiper'

import { View, Text } from 'react-native'

const Stack = createStackNavigator()

function IndexScreen() {
  return (
    <Index></Index>
  );
}

function DetailScreen() {
  return (
    <Detail></Detail>
  )
}
 
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Index">
            <Stack.Screen name="Index" component={IndexScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}
