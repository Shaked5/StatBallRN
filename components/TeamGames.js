import React from "react";
import { Text, View, StyleSheet, FlatList, ScrollView  } from "react-native";
import { TouchableOpacity} from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { useState, useEffect} from "react";


const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);


export const TeamGames = ({route, navigation,data}) => {

  const [selectedId, setSelectedId] = useState(null);
  
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "maccabi 100 - 98 hapoel",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "lakers 110 - 92  toronto",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "lakers 110 - 92  toronto",
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

  // useEffect(async () => {
  //   setPlayerList(data);
  // },[])
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.userText}>Welcome Shaked Shervi</Text>
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
      </View>
    </View>
  );
};
export default TeamGames;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#e63946",
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
    borderRadius:'15px',
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
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
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