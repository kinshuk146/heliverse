import React from 'react';
import {ImageBackground, StyleSheet, Text, View,Image} from 'react-native';
import award_bg from './assets/award_bg.png'
import awardPlatform from './assets/awardPlatform.png'
import girlClap from './assets/girlClap.png'
import castingLogo from './assets/castingLogo.png'


const Screen1 = ({navigation}) => {
  
  return (
  <View style={styles.container}>
    <ImageBackground source={award_bg} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>The results R in</Text> 
      <Image source={castingLogo} style={styles.castingLogo}></Image>
      <Image source={girlClap}  style={styles.girlClap}></Image>
      <Image source={awardPlatform} style={styles.awardPlatform}></Image>
    </ImageBackground>
    </View>
)};

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
    bottom:-300,
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
  castingLogo:{
    position:'absolute',
    width:100,
    marginLeft:'auto',
    marginRight:'auto',
    alignSelf:'center',
    justifyContent:'center',
    bottom:'60%',
    resizeMode: 'contain',
  }
});

export default Screen1;