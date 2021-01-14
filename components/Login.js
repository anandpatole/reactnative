import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';
import applogo from "../images/icon_mrise_logo.png"
import iconback from "../images/bg.jpg"
 const exampleImageUri = Image.resolveAssetSource(applogo).uri
const exampleImageUri1 = Image.resolveAssetSource(iconback).uri
const image = { uri: "https://reactjs.org/logo-og.png" };
import { NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import MyRing from './MyRing'
class SplashScreen extends React.Component {
    render() {
      
  
      return (
        <View style={styles.container} >
           <Image
            style={styles.imageLogo}
            source={require('../images/icon_mrise_logo.png')}
          />
        </View>
      );
    }
  }
export class Login extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = { isLoading: true }
      }
      handleLoginPress = () => 
      {
        this.props.navigation.navigate('HomeScreen')

      }
      performTimeConsumingTask = async() => {
        return new Promise((resolve) =>
          setTimeout(
            () => { resolve('result') },
            2000
          )
        );
      }
      async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();
    
        if (data !== null) {
          this.setState({ isLoading: false });
        }
      }
      state = {
        email: "",
        password: ""
      }
    
      
      render() {
        if (this.state.isLoading) {
          return <SplashScreen />;
        }
        const dataSource = [
          {url: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png', color: ''},
          {url: 'https://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png', color: ''},
          {url: 'https://www.freepnglogos.com/uploads/linkedin-blue-style-logo-png-0.png', color: ''},
          {url: 'https://lh3.googleusercontent.com/proxy/bq-zMcaMPYwvSis6cUb6SIvkuEInBo5n8yDBgUXhzQNbgY5ObJRtPuHhw8XWAv5_II5LIxI9QhJA3sr9l-FEA_EUPVnHaR9n9zlVqos6trQ1tD7RZ-SlCX8n1jIOXE1lkQ', color: ''},
          {url: 'https://freepngimg.com/thumb/pepsi_logo/32196-3-pepsi-logo-transparent.png', color: ''},
        ];
        return (
         
          
          <ImageBackground
          source={{ uri: "https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg" }}
          style={{
            flex: 1,
            width: null,
            height: null,
          }}
        >
          <View style={styles.container}
          >
    
    
    
            <Image
              style={styles.imageLogo}
              source={require('../images/icon_mrise_logo.png')}
            />
            <View style={styles.inputView} >
              <TextInput
                style={styles.inputText}
                placeholder="Email..."
                placeholderTextColor="black"
                onChangeText={text => this.setState({ email: text })} />
            </View>
            <View style={styles.inputView} >
              <TextInput
                secureTextEntry
                style={styles.inputText}
                placeholder="Password..."
                placeholderTextColor="#003f5c"
                onChangeText={text => this.setState({ password: text })} />
            </View>
    
            <TouchableOpacity style={styles.loginBtn} onPress={this.handleLoginPress}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity>
          <Text style={styles.loginText}>Signup</Text>
        </TouchableOpacity> */}
    
    
    {/* <MyRing
    dataSource={dataSource}
    onItemPress={item => {
      console.log(item);
    }}
    containerDim={{height: 200, width: 350}}
    itemDim={{width: 100, height: 110}}
    radius={100}
    /> */}
    
    
          </View>
        </ImageBackground >
    
          
        )
      }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#e31837",
      alignItems: 'center',
      justifyContent: 'center',
    },
    bgimage: {
  
      resizeMode: 'stretch'
  
    },
    logo: {
      fontWeight: "bold",
      fontSize: 50,
      color: "#e31837",
      marginBottom: 40
    },
    inputView: {
      width: "80%",
      backgroundColor: "#f7f7ed",
      borderRadius: 25,
      height: 50,
      marginBottom: 20,
      justifyContent: "center",
      padding: 20
    },
    imageLogo: {
      width: 250,
      height: 90,
      marginBottom: 5,
      resizeMode: 'center'
    },
    inputText: {
      height: 50,
      color: "black"
    },
    forgot: {
      color: "white",
      fontSize: 15,
      marginTop: 10
    },
    loginBtn: {
      width: "50%",
      backgroundColor: "black",
      borderRadius: 9,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      marginBottom: 10
    },
    loginText: {
      color: "white"
    }
  });
export default Login
