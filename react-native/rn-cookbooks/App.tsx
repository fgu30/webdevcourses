import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import Index from './views/Index'
import Detail from './views/detail/Detail'

import { store } from './store/Swiper'

import { StatusBar } from 'react-native'

const Stack = createStackNavigator()

function IndexScreen(props: any) {
  return (
    <Index {...props}></Index>
  );
}

function DetailScreen(props: any) {
  return (
    <Detail {...props}></Detail>
  )
}
 
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar barStyle="light-content" ></StatusBar>
        <Provider store={store}>
          <Stack.Navigator
            initialRouteName="Index"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          >
            <Stack.Screen 
              name="Index" 
              component={IndexScreen}
              options={{ title: '美食大全' }}
            />
            <Stack.Screen 
              name="Detail" 
              component={DetailScreen}
              options={{ title: '详情' }}
            />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    )
  }
}
