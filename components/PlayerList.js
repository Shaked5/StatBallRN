
import { useState, useEffect } from 'react'
import React from 'react';
import { View, StyleSheet, FlatList, SafeAreaView  } from 'react-native'

const PlayerList = ({ players }) => {
    console.log('PlayerRow', players)

    const renderItem = ({ player }) => (
        <View name={player.fName + ' ' + player.lName} />
      );
    return (
        <SafeAreaView style={styles.container}>
            <FlatList style={styles.playerRow}
                data={players}
                renderItem={renderItem}
                keyExtractor={player => player.id}
            />
        </SafeAreaView>
    )

}

export default PlayerList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '5px',
    }
    // playerRow: {
    //     display: 'flex',
    //     flex: 0.1,
    //     width: '100%',
    //     padding: '0 15px 10px',
    // },
    // playerName: {

    //     color: '#000',
    //     fontWeight: '700',
    //     textIndent: '22px',
    //     height: '30px',
    //     lineHeight: '30px',
    //     padding: '5px 0',
    //     overflow: 'hidden',
    //     // borderBottom:'1px solid #ececec',
    //     boxShadow: 'rgb(0 0 0 / 70%) 0 2px 4px',
    // }
});