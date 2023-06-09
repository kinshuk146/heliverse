import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import {ImageBackground, StyleSheet, Text, View,Image} from 'react-native';
import award_bg from './assets/award_bg.png'
import awardPlatform from './assets/awardPlatform.png'
import girlClap from './assets/girlClap.png'
import castingLogo from './assets/castingLogo.png'
import mainHeart from './assets/main-heart.png'
import arrow from './assets/arrow.png'
import avtar2 from './assets/avtar2.png'



const Screen2 = () => 
{
    const imageTranslateX = useRef(new Animated.Value(0)).current;
  
    useEffect(() => {
      const animation = Animated.sequence([
        Animated.timing(imageTranslateX, {
          toValue: -350, // Distance to translate from right to left
          duration: 1000, // Total duration of the animation
          useNativeDriver: true,
        }),
        
        Animated.timing(imageTranslateX, {
          toValue: -700, // Translate back to the starting position
          duration: 1000, // Duration of the return animation
          useNativeDriver: true,
        }),
      ]);
  
      Animated.loop(animation).start(); 
      return () => { animation.stop();}
      ;}, []);

  return(

  <View style={styles.container}>
    <ImageBackground source={award_bg} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Gave U Some Love</Text> 
      <Text style={styles.hearttext}>15000</Text> 
      <Image source={mainHeart} style={styles.mainHeart}></Image>
      <Image source={girlClap}  style={styles.girlClap}></Image>
      <Animated.Image
      source={avtar2}
      style= {{
        transform: [{ translateX: imageTranslateX }],
        zIndex:20,
        width:125,
        left:500,
        height:125,
        bottom:100,
        resizeMode: 'contain',
        bottom:'75%',
        borderRadius:10
      }}
    />
      <Image source={arrow} style={styles.arrow}></Image>
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
    top:300,
  },
  hearttext: {
    flex:1,
    color: '#f0fc03',
    fontSize: 30,
    textAlign: 'center',
    top:'3%',
    zIndex:12,
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

export default Screen2;