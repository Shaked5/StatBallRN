import { useState, useEffect } from 'react'
import React from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native'
import { AsyncStorage } from '@react-native-community/async-storage';
import BackGImg from '../../Images/backGimg.png'
import userHandler from '../../handler/userHandler';


const image = { uri: 'https://images-na.ssl-images-amazon.com/images/I/71tdJLduL9L._AC_SX466_.jpg' }
export const Register = ({navigation}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");


 

  const handleRegister = async () => {
    if(email===null || password === null || fullName === null){
      return;
    }
    let date = new Date();
    let createdAt = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    const res = await userHandler.register(email, fullName, password, createdAt)
    //navigate to Home screen
    navigation.navigate('Login')
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
            placeholder="Full Name..."
            placeholderTextColor="black"
            placeholderSize="large"
            onChangeText={text => setFullName(text)}>
          </TextInput>
          
          <TextInput style={styles.inputText}
            secureTextEntry={true}
            placeholder="Password..."
            placeholderTextColor="black"
            onChangeText={pass => setPassword(pass)}>
          </TextInput>
        </View>
        <View>
          <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
            <Text style={styles.loginText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} onPress={()=> {
            navigation.navigate('Home')
          }}>
            <Text style={styles.loginText} onPress={()=> {
              navigation.navigate('Login')
            }}>Back</Text>
          </TouchableOpacity>
        </View>
        </ImageBackground>
    </View>
  
  );

}
export default Register;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5n",
    marginBottom: 80
  },
  inputView: {
    width: "60%",
    fontSize: 80,
    backgroundColor: "#465881",
    borderRadius: 25,
    height: "30%",
    marginBottom: 20,
    justifyContent: "center",
    padding: 80,
  },
  inputText: {
    height: 100,
    color: "white",
    fontSize: 30,
    padding:10,
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
    flex:1,
    resize: "cover",
    justifyContent: "center",
    alignItems: "center",
    // width: 768,
    // height: 600,
    width:"100%",
    height:"100%"
  }
});