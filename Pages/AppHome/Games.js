import React from 'react'
import { View, Text } from 'react-native'
import TeamGames from '../../components/TeamGames'
import PlayerTeam from '../PlayerTeam'

export const Games =() => {

    useEffect(() => {
        getData();
        console.log('in useEffect in Games =', );
        
    
      }, [])
    return (
        <View style={{flex:1}}>
            <TeamGames/>
            
        </View>
    )
}