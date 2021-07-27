import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native'
// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigation from './navigation/StackNavigation';


export const App = () => {
  return (
    // <NavigationContainer>
      <StackNavigation />
    // {/* </NavigationContainer> */}
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