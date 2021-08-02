import React from 'react'
import { View, Text , StyleSheet, ImageBackground } from 'react-native'
import UserProfile from '../../components/UserProfile'
import ProfileBackground from '../../Images/basketball_bg.png'
import GameTable from '../../components/GameTable'

export const Profile = () => {
    return (
        <View style={styles.centeredView}>
            <ImageBackground source={ProfileBackground} style={styles.backgroundImage}>
                <UserProfile/>
            </ImageBackground>
         
        </View>
    )
}

export default Profile;


const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      alignItems:'center',
      justifyContent: "center",
  
    },
    backgroundImage:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: "100%",
        hight: "90%",
    },

  });