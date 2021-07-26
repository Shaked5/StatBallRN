import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity} from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import PlayerRow from '../components/PlayerList';
import PlayerList from "../components/PlayerList";
import user from "../handler/user";


export const PlayerTeam = ({route, navigation,data}) => {

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
<Text>dasda</Text>
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