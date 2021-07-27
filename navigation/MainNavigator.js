// import React, { Component } from 'react';
// import { TouchableOpacity, View, StatusBar } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Login from '../Pages/AppAuth/Login';
// import Register from '../Pages/AppAuth/Register';
// import Home from '../Pages/AppHome/Home';

// import PlayerTeam from '../Pages/PlayerTeam';
// import { not } from 'react-native-reanimated';
// import HomeImage from '../components/HomeImage';
// import { Games } from '../Pages/Games';


// const Stack = createStackNavigator();
// const HomeStack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const MainNavigator = (navigation, route) => {

//     const user = false;


//     // const Home1 = (
//     //     <Tab.Navigator>
//     //         <Tab.Screen name="Home" component={HomeImage} />
//     //         <Tab.Screen name="Games" component={Games} />
//     //     </Tab.Navigator>
//     // )

//     //Authentication
//     const defaultScreens = (
//         <>
//             <Stack.Screen
//                 name="Login"
//                 component={Login}
//                 options={{ headerShown: false }}
//             />
//             <Stack.Screen
//                 name="Register"
//                 component={Register}
//                 options={{ headerShown: false }}
//             />

//             <Stack.Screen
//                 name="Home1"
//                 component={HomeImage}
//                 options={{
//                     headerShown: false,

//                 }}
//             />

//         </>


//     );


//     //Main Tab Screen
//     const LoggedInNavigator = (
//         <>
//             <HomeStack.Screen
//                 name="Home1"
//                 component={Home1}
//                 options={{
//                     headerShown: false,

//                 }}
//             />
//             {/* { <HomeStack.Screen
//                 name="HomeImage"
//                 component={HomeImage}
//             /> */}
//         </>
//     );



//     return (
//         <Stack.Navigator>

//             {user ? LoggedInNavigator : defaultScreens}

//         </Stack.Navigator>
//     )
// }
// export default MainNavigator;







//     // initialRouteName={Home}
//         // tabBarOptions={{
//         //     style: {
//         //         borderTopColor: "rgba(0, 0, 0, 0.1)",
//         //         borderTopWidth: 2,
//         //     },
//         //     activeTintColor: "green",
//         //     labelStyle: { fontSize: 13, fontWeight: "700" },
//         // }}>