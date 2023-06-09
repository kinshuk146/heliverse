import {React,useEffect,useRef,useState} from 'react';
import {Animated,ImageBackground, StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import award_bg from './assets/award_bg.png'
import awardPlatform from './assets/awardPlatform.png'
import girlClap from './assets/girlClap.png'
import castingLogo from './assets/castingLogo.png'
import mainHeart from './assets/main-heart.png'
import arrow from './assets/arrow.png'
import { useCountUp } from 'react-use-count-up';


const Screen3 = ({navigation}) => {
  const [counter, setCounter] = useState(15000);


  const onPress=()=>{
    navigation.push('firstscreen')
    navigation.popToTop();
  }
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        const updatedCounter = prevCounter + 500;
        if (updatedCounter >= 40000) {
          clearInterval(interval);
        }
        return updatedCounter;
      });
    }, 3);

    return () => {
      clearInterval(interval);
    };
  }, []);


  return(
    <View style={styles.container}>
    <ImageBackground source={award_bg} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>4 Friends Gave U Some Love</Text> 
      <Text style={styles.hearttext}>{counter}</Text> 
      <Image source={mainHeart} style={styles.mainHeart}></Image>
      <Image source={girlClap}  style={styles.girlClap}></Image>
      <TouchableOpacity
          style={styles.buttonFacebookStyle}
          activeOpacity={0.5}
          onPress={onPress}
          >
          <Image
            source={arrow}
            onPress={()=>{onPress}}
            style={styles.buttonImageIconStyle}
          />
        </TouchableOpacity>

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
    bottom:-200,
  },
  hearttext: {
    flex:1,
    color: '#f0fc03',
    fontSize: 30,
    textAlign: 'center',
    top:'1%',
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
  },
  button:{
      alignItems: 'center',
      justifyContent: 'center',
  },
  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    left:'30%',
    bottom:'40%',
    margin: 5,
    zIndex:10,
    height: 80,
    width: 80,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    zIndex:12,
  },
});

export default Screen3;