import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native'
// import 'react-native-gesture-handler';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import MainNavigator from './navigation/MainNavigator';
import LoggedInNavigator from './navigation/LoggedInNavigator';
import Login from './Pages/AppAuth/Login';
import { NavigationContainer } from '@react-navigation/native';
import Register from './Pages/AppAuth/Register';


export const App = () => {


  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
export default App;



// const AppContainer = createAppContainer(
//   createSwitchNavigator(
//     {

//       Login,
//       AppStack
//     },
//     {
//       initialRouteName: 'Login',
//     }
//   )
// )



// export default StackAuth;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   backgroundImage:{
//     resize: "cover",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "100%",
//     height: "100%"
//   }
// });