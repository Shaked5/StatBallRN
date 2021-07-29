import React from 'react'
import { View, Text } from 'react-native'
import { useState, useEffect, useContext } from "react";
import TeamGames from '../../components/TeamGames'

export const Games = () => {

    useEffect(() => {
        console.log('in useEffect in Games =',);
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <TeamGames />
        </View>
    )
}