import React from "react";
import { Text, View, StyleSheet, FlatList, ScrollView  } from "react-native";
import { TouchableOpacity} from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { useState, useEffect,  } from "react";
import PlayerRow from '../components/PlayerList';
import PlayerList from "../components/PlayerList";
import user from "../handler/user";



const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);


export const PlayerTeam = ({route, navigation,data}) => {

  const [selectedId, setSelectedId] = useState(null);
  
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];
  
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  


  console.log("data from Home= ", data);
  const [playerList,setPlayerList] = useState([]);

  // useEffect(async () => {
  //   setPlayerList(data);
  // },[])

  console.log('PlayerTeam',data)
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.userText}>Your Team!</Text>

        <TouchableOpacity>
          <AntDesign name="pluscircle" size={54} color="white" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 10, backgroundColor: "#fff" }}>
        <ScrollView >
        <FlatList
         data={DATA}
         renderItem={renderItem}
         keyExtractor={(item) => item.id}
         extraData={selectedId}
        
        />
        </ScrollView>
        {/* {data.map((player,key) =>{
          return(
            <PlayerList key={key} player={player} />
          )
        })} */}
       {/* {route.params != undefined ?route.params.stam:"...."} */}
      

      </View>
    </View>
  );
};
export default PlayerTeam;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    width: "40%",
    
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
    marginTop:20,
    padding: 40,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

   {/* {players.map((user,index) => {
            return(
            <View key={index} style={styles.mapView}>
                 Name:{user.userId}
                  Email:{user.email}
                  Fullname:{user.fullName}
              </View>)
          } )} */}

            {/* {players1.map((user, index) => {
          return (
            <View key={index} style={styles.mapView}>
              <Text style={styles.mapText}>ID: {user.playerId}</Text>
              <Text style={styles.mapText}>Name: {user.fName}</Text>
              <Text style={styles.mapText}>last: {user.lName}</Text>
            </View>
          )
        })} */}