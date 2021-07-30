import React from 'react'
import { View, Text , StyleSheet } from 'react-native'
import { useState, useEffect, useContext } from "react";
import TeamGames from '../../components/TeamGames'
import HomeImage from '../../components/HomeImage';
import GamesImage from '../../components/GamesImage'

export const Games = () => {

    useEffect(() => {
        console.log('in useEffect in Games =',);
    }, [])

    return (
        <View style={styles.centeredView}>
            <TeamGames />
            <GamesImage/>
            
        </View>
    )
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        flexDirection:'row',
        justifyContent: "center",
        
      },

})