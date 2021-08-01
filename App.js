import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native'
// import 'react-native-gesture-handler';
import { StatBallProvider } from './context';
import MainNavigator from './navigation/MainNavigator';
import Toast from 'react-native-toast-message';



export const App = () => {
  return (
    <StatBallProvider>
      <MainNavigator/>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </StatBallProvider>
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