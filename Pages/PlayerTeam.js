import React from "react";
import { Text, View, StyleSheet, FlatList, ScrollView  } from "react-native";
import { TouchableOpacity} from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { useState, useEffect,  } from "react";
<<<<<<< HEAD
import {StatBallContext} from '../context';
=======
import PlayerRow from '../components/PlayerList';
import PlayerList from "../components/PlayerList";
import user from "../handler/user";
import { Modal } from "react-native-paper";
>>>>>>> 7ed9f38e2205bbe40948ee7030354c7632826ce1


export const PlayerTeam = ({route, navigation,data}) => {


<<<<<<< HEAD
export const PlayerTeam = ({route, navigation,data}) => {
  const {user} = React.useContext(StatBallContext);
=======

>>>>>>> 7ed9f38e2205bbe40948ee7030354c7632826ce1
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
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "forth Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "five Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "six Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "seven Item",
    },
  ];


  
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#fffff";
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

<<<<<<< HEAD
=======
  

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
  );
  

  console.log("data from Home= ", data);
>>>>>>> 7ed9f38e2205bbe40948ee7030354c7632826ce1
  const [playerList,setPlayerList] = useState([]);

  // useEffect(async () => {
  //   setPlayerList(data);
  // },[])
<<<<<<< HEAD
  
=======

  console.log('PlayerTeam',data)
>>>>>>> 7ed9f38e2205bbe40948ee7030354c7632826ce1

  return (
    <View style={styles.container}>

      <View style={styles.header}>
<<<<<<< HEAD
        <Text style={styles.userText}>Welcome {user.fullName}</Text>

        <TouchableOpacity>
=======
        <Text style={styles.userText}>Your Team!</Text>
      
  
        {/* <TouchableOpacity onPress={()=> setShowModal(visible)}>
     
>>>>>>> 7ed9f38e2205bbe40948ee7030354c7632826ce1
          <AntDesign name="pluscircle" size={54} color="white" />
        </TouchableOpacity> */}
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
    borderColor:'black',
    marginTop:20,
    padding: 40,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },

  modalButton:{
    marginBottom:10,
    borderWidth:1,
    borderRadius:25,
    backgroundColor:'black',
  },
  modalContent:{

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