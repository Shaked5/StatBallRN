import React from 'react'
import { View, Text,StyleSheet ,ImageBackground} from 'react-native'
import GameTable from '../../components/GameTable'
import ProfileBackground from '../../Images/basketball_bg.png'

const CreateGameScreen = () => {
    return (
        <View style={styles.centeredView}>
        <ImageBackground source={ProfileBackground} style={styles.backgroundImage}>
            {/* <UserProfile/> */}
            <GameTable/>
        </ImageBackground>
     
    </View>
      
    )
}

export default CreateGameScreen


const styles = StyleSheet.create({
    centeredView: {
        alignItems:'center',
        justifyContent: "center",
    
      },
      backgroundImage:{
          flex: 1,
          resizeMode: "cover",
          width: "100%",
          height: "90%",
      },
  

  });