import { useState, useEffect } from 'react'
import React from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'
import BackGImg from '../../Images/backGimg.png'

import Register from './Register';
import LoggedInNavigator from '../../navigation/LoggedInNavigator';
import user from '../../handler/user';


export const Login = ({navigation,route,data}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [players, setPlayers] = useState([]);

  // const GetPlayers = async (email,password) => {
  //   // try{
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ email, password })
  // };
  //   const response = await fetch(
  //     `https://localhost:44324/api/player/Login`,requestOptions
  //   );
  //   const data = await response.json();
  //   console.log('GetPlayers',data);
  //   return data
    // catch{
    //   console.log('data = ',data)
    // }
    // setPlayers(data);
  // };
 
  const userLogin = async () => {
    let data = await user.loginWithEmailAndPass(email,password);
    console.log('userLogin',data)
   navigation.navigate('Home')
  }

  return (
    <View style={{flex: 1}}>
      <ImageBackground source={BackGImg} style={styles.backgroundImage}>
        <Text style={styles.logo}>StatBall</Text>
        <View style={styles.inputView}>
          <TextInput style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="black"
            placeholderSize="large"
            onChangeText={text => setEmail(text)}>
          </TextInput>
          <TextInput style={styles.inputText}
            secureTextEntry={true}
            placeholder="Password..."
            placeholderTextColor="black"
            onChangeText={pass => setPassword(pass)}>
          </TextInput>
        </View>
        <View>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText} onPress={userLogin}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} onPress={() =>{
            navigation.navigate('Register')
          }}>
            <Text style={styles.loginText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );

}
export default Login;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'https://www.crushpixel.com/big-static15/preview4/perspective-basketball-court-floor-with-2133912.jpg'
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5n",
    marginBottom: 40
  },
  inputView: {
    width: "60%",
    fontSize: 80,
    backgroundColor: "#465881",
    borderRadius: 25,
    height: "30%",
    marginBottom: 20,
    justifyContent: "center",
    padding: 80
  },
  inputText: {
    height: 100,
    color: "white",
    fontSize: 30,

  },
  inputPass: {
    height: 100,
    color: "white",
  },
  loginText: {
    fontSize: 50,
    marginTop:30,
    marginBottom:40,
    padding:50,

  },
  loginBtn: {
    width: "100",
    backgroundColor: "#fb5b5a",
    borderRadius: 20,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    padding:50,
  },
  backgroundImage: {
    flex: 1,
    resize: "cover",
    justifyContent: "center",
    alignItems: "center",
    // width: 768,
    // height: 600,
    width: "100%",
    height: "100%"
  }
});

