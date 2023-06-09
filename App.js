import 'react-native-gesture-handler';
import React from 'react';
import {ImageBackground, StyleSheet, Text, View,Image,Button,Touchable,TouchableOpacity} from 'react-native';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import arrow from './assets/arrow.png'

const Stack = createStackNavigator();


function Firstscreen({navigation}) {
  setTimeout(() => {
    navigation.navigate('secondscreen');
  }, 3000);
  return (
    <Screen1/>
  );
}

function Secondscreen({navigation}) {
  setTimeout(() => {
    navigation.navigate('thirdscreen');
  }, 2000);
  return (
    <Screen2/>
  );
}

function ThirdScreen({navigation}) {
  // setTimeout(() => {
  //   navigation.navigate('firstscreen');
  // }, 2000);
  return (
    <Screen3/>
  );
}

const screenOptions = {
  transitionSpec: {
    open: {
      animation: 'timing',
      config: {
        duration: 500,
      },
    },
    close: {
      animation: 'timing',
      config: {
        duration: 0,
      },
    },
  },
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};



const App = () => (
  <NavigationContainer>
      <Stack.Navigator initialRouteName="firstscreen" screenOptions={{headerShown: false}}>
        <Stack.Screen name="firstscreen" component={Firstscreen} options={screenOptions}   />
        <Stack.Screen name="secondscreen" component={Secondscreen} options={screenOptions}  />
        <Stack.Screen name="thirdscreen" component={Screen3} options={screenOptions}  />
      </Stack.Navigator>
    </NavigationContainer>
);

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    position:'relative'
  },
  text: {
    flex:1,
    color: '#f0fc03',
    fontSize: 30,
    textAlign: 'center',
    bottom:-200,
  },
  hearttext: {
    flex:1,
    color: '#f0fc03',
    fontSize: 30,
    textAlign: 'center',
    bottom:'4.5%',
    zIndex:20,
  },
  awardPlatform:{
    position:'absolute',
    bottom: 0,
    height: 100,
    width:'100%'
  },
  girlClap:{
    position:'absolute',
    width:200,
    height:400,
    alignSelf:'center',
    justifyContent:'center',
    bottom:'3%',
    resizeMode: 'contain',
    flexDirection:'column'
  },
  mainHeart:{
    position:'absolute',
    width:150,
    marginLeft:'auto',
    marginRight:'auto',
    alignSelf:'center',
    justifyContent:'center',
    bottom:'20%',
    resizeMode: 'contain',
  },
  arrow:{
    position:'absolute',
    width:80,
    marginLeft:'auto',
    marginRight:'auto',
    alignSelf:'center',
    justifyContent:'center',
    bottom:'20%',
    left:'70%',
    resizeMode: 'contain',
  }
});