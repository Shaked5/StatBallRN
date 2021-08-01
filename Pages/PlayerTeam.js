import React from "react";
import { Text, View, StyleSheet, FlatList, ScrollView, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState, useEffect, useContext } from "react";
import { Modal } from "react-native-paper";
import { StatBallContext } from '../context';
import userHandler from "../handler/userHandler";
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { retrieveAsyncStorageData, removeAsyncStorageData } from '../handler/storage'
import { AntDesign } from '@expo/vector-icons';
import HomeImage from "../components/HomeImage";


export const PlayerTeam = ({ route, navigation }) => {

  const [name, setName] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const { getItem, setItem } = useAsyncStorage('user');
  const [visible, setVisible] = useState(false);
  const { playersList, setPlayerList, setUser, setEPlayer, user, setOpenModal } = useContext(StatBallContext);


  useEffect(() => {
    getData();

  }, [])

  useEffect(() => {
    // getData();

  }, [playersList])


  const getData = async () => {
    let data = await retrieveAsyncStorageData('user')
    if (data === null)
      return;
    // setName(data.fullName)
    if (data !== undefined && data !== null) {
      let getPlayers = await userHandler.GetPlayersById(data.userId)
      setPlayerList(getPlayers);
    }
  }

  const btnLogOut = async () => {
    try {
      await removeAsyncStorageData('user');
    }
    catch (ex) {
      console.error(ex.message);
    }
    setUser(null);
  };

  const handleDeletePlayerById = async (playerId) => {
    try {
      if (playerId !== null) {
        let res = await userHandler.DeletePlayerById(playerId);
        console.log('res=', res);
        let players = await userHandler.GetPlayersById(user.userId);
        setPlayerList(players)
      }
    }
    catch(ex){
      console.error(ex.message);
    }
  }



  const renderItem = ({ item }) => {
    const backgroundColor = item.playerId === selectedId ? "#d62828" : "#fffff";
    const color = item.playerId === selectedId ? 'white' : 'black';
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.playerId)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}

      />
    );
  };



  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={styles.shirtNumber}>{item.shirtNumber}</Text>
      {/* <View style={styles.rowDir}> */}
      <View style={styles.detailsSection}>
        <Text style={[styles.title, textColor]}>{item.fName} {item.lName}</Text>
        <Text style={styles.position}>{item.position}</Text>
        <Text style={styles.prop}>Age: {item.age} Height: {item.height}</Text>
        <TouchableOpacity onPress={() => {
          setEPlayer(item);
          setOpenModal(true)
        }
        }>
          <View>
            <AntDesign name="edit" size={24} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteBtn} onPress={() => {
          console.log('delete');
          handleDeletePlayerById(item.playerId)

        }
        }>

          <View>
            <AntDesign name="delete" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      {/* </View> */}
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.userText}>Welcome {name}</Text>

        <TouchableOpacity onPress={btnLogOut}>
          <View>
            <AntDesign name="logout" size={30} color="black" />
          </View>
        </TouchableOpacity>

      </View>
      <View style={{ flex: 10, backgroundColor: "#fff" }}>
        <ScrollView >
          <FlatList
            data={playersList}
            renderItem={renderItem}
            keyExtractor={(item) => item.playerId}
            extraData={selectedId}

          />
        </ScrollView>
      </View>

    </View>
  );
};
export default PlayerTeam;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#e63946",
    width: "40%",
  },
  containerBtnLogOut: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'gray'
  },
  header: {
    flex: 1,
    padding: "2.8%",
    border: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mapView: {
    flexDirection: 'column',
    backgroundColor: 'white',
    border: '1px black solid',
    padding: '5%',
  },
  mapText: {
    fontSize: '25px',
    margin: '1px',
  },
  userText: {
    color: 'white',
    fontSize: '25px',
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'black',
    margin: 0,
    padding: 10,
  },
  shirtNumber: {
    flex: 0.1,
    fontSize: 25,
    fontWeight: 700,

    textAlign: 'center',
    alignSelf: 'center'
  },
  detailsSection: {
    flex: 0.8,
    flexDirection: 'row',
    margin: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
  },
  position: {
    fontSize: 18,
    padding: 5,
    margin: 0,
  },
  prop: {
    display: 1,
    fontSize: 18,
    padding: 5,
    fontWeight: 400,
    color: '#333',

  },
  rowDir: {
    flexDirection: 'row',
  },
  modalButton: {
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: 'black',
  },
  deleteBtn: {
    marginLeft: '2%'
  },
});