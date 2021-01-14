
import 'react-native-gesture-handler';
import React, {Component} from 'react';


import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'; 

import Login from './components/Login';
import HomeScreen from './components/HomeScreen';
const Stack = createStackNavigator(); 


 export class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator 
      
      initialRouteName="Login">
        <Stack.Screen  name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen  name="HomeScreen" component={HomeScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
}


export default App



