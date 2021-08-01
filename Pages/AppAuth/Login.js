import { useState, useEffect, useContext } from 'react'
import React from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import BackGImg from '../../Images/backGimg.png'
import { StatBallContext } from '../../context';
import userHandler from '../../handler/userHandler'
import AsyncStorage from '@react-native-community/async-storage';



const setAsyncStorageData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('user', jsonValue)
  } catch (e) {
    // saving error
  }
}

const readUserFromStorage = async () => {
  const item = await AsyncStorage.getItem('user');
  console.log('item=', item);

};

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = React.useContext(StatBallContext);
  const [data, setData] = useState("");


  useEffect(() => {

  }, [])

  const userLogin = async () => {

    if (email === '' || password === '') {
      alert('Please fill all fields!')
      return;
    }
    let data = await userHandler.loginWithEmailAndPass(email, password);
    if (data === null) {
      alert('Wrong email or pass!')
      return;
    }

    await setAsyncStorageData(data)
    setUser(data)
    navigation.navigate('TabStack', {
      data: data
    })
  }
  return (
    <View style={{ flex: 1 }}>
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
          <TouchableOpacity style={styles.loginBtn} onPress={userLogin}>
            <Text style={styles.loginText} >Login</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.loginBtn} onPress={() => {
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
    marginTop: 30,
    marginBottom: 40,
    padding: 50,

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
    padding: 50,
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

