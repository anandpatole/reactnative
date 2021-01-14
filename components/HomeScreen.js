import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { Button, StyleSheet,View, Text ,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutUs from './AboutUs'
import Icon from 'react-native-vector-icons/FontAwesome';
function Feed() {
    return (
        <View style={styles.screen}>
             <View style={styles.screen2}>
            <View style={styles.screen1}>
        <TouchableOpacity
          
          style={styles.roundButton1}>
          <Text>I'm a button</Text>
        </TouchableOpacity>
        <TouchableOpacity
          
          style={styles.roundButton1}>
          <Text>I'm a button</Text>
        </TouchableOpacity>
  </View>
  <View style={styles.screen1}>
        <TouchableOpacity
          
          style={styles.roundButton1}>
          <Text>I'm a button</Text>
        </TouchableOpacity>
        <TouchableOpacity
          
          style={styles.roundButton1}>
          <Text>I'm a button</Text>
        </TouchableOpacity>
  </View>
  </View>
      </View>
    );
  }
  
  function Profile() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
      </View>
    );
  }
  
  function Notifications() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications!</Text>
      </View>
    );
  }
  
  const Tab = createBottomTabNavigator();
  
  function MyTabs() {
    return (
      <Tab.Navigator
      backBehavior='none'
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#e91e63',
          tintColor:"#e91e63",
        }}
      >
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon:({tintColor})=>(  
                <Icon name="home" color={tintColor} size={25}/>  
            ) ,
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: 'Updates',
            tabBarIcon:({tintColor})=>(  
                <Icon name="lock" color={tintColor} size={25}/>  
            ) ,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon:({tintColor})=>(  
                <Icon name="repeat" color={tintColor} size={25}/>  
            ) ,
          }}
        />
      </Tab.Navigator>
    );
  }
  
  export default function HomeScreen() {
    return (
      <NavigationContainer independent={true}>
        <MyTabs />
        </NavigationContainer>
      
    );
    }
    const styles = StyleSheet.create({
        screen: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        screen1: {
            flex: 1,
            flexDirection : 'row',
            justifyContent: 'center',

            alignItems: 'center',
          },
          screen2: {
            flex: 1,
            flexDirection : 'column',
            justifyContent: 'center',

            alignItems: 'center',
          },
        roundButton1: {
          width: 100,
          height:100,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          borderRadius: 100,
          margin :30,
          backgroundColor: 'orange',
        },
        roundButton2: {
          marginTop: 20,
          width: 150,
          height: 150,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          borderRadius: 100,
          backgroundColor: '#ccc',
        },
      });