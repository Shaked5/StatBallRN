import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import PlayerTeam from '../Pages/PlayerTeam'

const HomeImage = () => {
    return (
        <View style={styles.container}>

            <PlayerTeam />
            <View style={styles.screenLeft}>
                <Text>Statistics</Text>
            </View>
        </View>
    )
}

export default HomeImage



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
    },
    screenLeft:{
        flex:2,
        alignItems:'center',
        paddingTop:'30%',
        height: '100%',
        backgroundColor:'lightgreen',

    },
    viewRight:{
       
    }


});
