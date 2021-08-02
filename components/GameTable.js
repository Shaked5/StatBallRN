import React, { useContext, useState, useEffect } from "react";
import { DataTable } from "react-native-paper";
import { StyleSheet,View,ScrollView, TouchableOpacity,Text,} from "react-native";
import { StatBallContext } from "../context";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";


const GameTable = () => {
  const { playerList } = useContext(StatBallContext);
  const [rebounds, setRebounds] = useState(0);
  const [statistics, setStatistics] = useState([]);
  const [playerPointer, setPlayerPointer] = useState();


  useEffect(() => {
    let players2 = initialStatistics();
    async function fetchdata() {
      const response = await setStatistics(players2);
    }
    fetchdata()
    console.log('players2=', players2);
    console.log('Statistics=', statistics);
  }, []);

  useEffect(() => {
    console.log('StatUseEffect= AFTER SET', statistics);
  }, [statistics]);

  // useEffect(() => {
  //   console.log('playerPointerAfter= ',playerPointer);
  //   console.log('Statistics use effect=  ', Statistics);
  //   }, [playerPointer]);

  const initialStatistics = () => {
    let players = [];
    playerList.map(
      player =>
      (players = [
        ...players,
        {
          playerId: player.playerId,
          playerName: player.fName + " " + player.lName,
          FT: 0,
          shirtNumber: player.shirtNumber,
          twoPT: 0,
          threePT: 0,
          steals: 0,
          rebounds: 0,
        },
      ])
    );
    return players;
  };
  const handlePressAddRebounds = async (player) => {
    let pPointer = statistics.find(x => x.playerId === player.playerId);
    console.log('pPointer= ', pPointer);
    //  change properties
    pPointer['rebounds'] = pPointer.rebounds + 1
    //  await setPlayerPointer(pPointer)
    //  console.log('playerPointerAfter= ',playerPointer);

    let newArray = statistics.filter(x => x.playerId !== player.playerId)
    console.log('newArray=', newArray);
    setStatistics([pPointer, ...newArray])
  }

  // handlePressMinusRebounds = async () => {

  // }

  // const test =()=>{
  //   if(statistics !== undefined){
  //     return playersList;
  //   }
  //   else{
  //     return statistics;
  //   }
  // }

  const renderPlayers = statistics.map((player, index) => {
    return (
      <DataTable.Row key={index} style={styles.dataTable}>
        <DataTable.Cell style={{ flex: 0.5, justifyContent: 'center' }}>
          {player.shirtNumber}
        </DataTable.Cell>

        <DataTable.Cell style={styles.playerName}>
          {player.playerName}
        </DataTable.Cell>

        <DataTable.Cell>
          <View style={styles.playerContainer}>
            <View style={styles.iconBtn}>
              <MaterialCommunityIcons
                name="basketball-hoop"
                style={styles.iconsToggle}
                size={30}
                color="red"
              />
              <MaterialCommunityIcons
                name="basketball-hoop-outline"
                style={styles.iconsToggle}
                size={30}
                color="green"
                onPress={() => alert("WEEE")}
              />
            </View>
            <View style={styles.iconBtn}>
              <MaterialIcons
                name="add"
                style={styles.iconsToggle}
                size={25}
                color="red"
                onPress={() => alert("WEEE")}
              />
              <MaterialIcons
                name="add"
                style={styles.iconsToggle}
                size={25}
                color="green"
                onPress={() => alert("WEEE")}
              />
            </View>
            <View>
              <Text style={{ textAlign: "center" }}>Value</Text>
            </View>
            <View style={styles.iconBtn}>
              <MaterialCommunityIcons
                name="minus"
                style={styles.iconsToggle}
                size={25}
                color="green"
                onPress={() => alert("WEEE")}
              />
              <MaterialCommunityIcons
                name="minus"
                style={styles.iconsToggle}
                size={25}
                color="red"
                onPress={() => alert("WEEE")}
              />
            </View>
          </View>
        </DataTable.Cell>
        <DataTable.Cell style={styles.btnCell}>
          <View style={styles.playerContainer}>
            <View style={styles.iconBtn}>
              <MaterialCommunityIcons
                name="basketball-hoop"
                style={styles.iconsToggle}
                size={30}
                color="red"
              />
              <MaterialCommunityIcons
                name="basketball-hoop-outline"
                style={styles.iconsToggle}
                size={30}
                color="green"
                onPress={() => alert("WEEE")}
              />
            </View>
            <View style={styles.iconBtn}>
              <MaterialIcons
                name="add"
                style={styles.iconsToggle}
                size={25}
                color="red"
                onPress={() => alert("WEEE")}
              />
              <MaterialIcons
                name="add"
                style={styles.iconsToggle}
                size={25}
                color="green"
                onPress={() => alert("WEEE")}
              />
            </View>
            <View>
              <Text style={{ textAlign: "center" }}>Value</Text>
            </View>
            <View style={styles.iconBtn}>
              <MaterialCommunityIcons
                name="minus"
                style={styles.iconsToggle}
                size={25}
                color="green"
                onPress={() => alert("WEEE")}
              />
              <MaterialCommunityIcons
                name="minus"
                style={styles.iconsToggle}
                size={25}
                color="red"
                onPress={() => alert("WEEE")}
              />
            </View>
          </View>
        </DataTable.Cell>
        <DataTable.Cell style={styles.btnCell}>
          <View style={styles.playerContainer}>
            <View style={styles.iconBtn}>
              <MaterialCommunityIcons
                name="basketball-hoop"
                style={styles.iconsToggle}
                size={30}
                color="red"
              />
              <MaterialCommunityIcons
                name="basketball-hoop-outline"
                style={styles.iconsToggle}
                size={30}
                color="green"
                onPress={() => alert("WEEE")}
              />
            </View>
            <View style={styles.iconBtn}>
              <MaterialIcons
                name="add"
                style={styles.iconsToggle}
                size={25}
                color="red"
                onPress={() => alert("WEEE")}
              />
              <MaterialIcons
                name="add"
                style={styles.iconsToggle}
                size={25}
                color="green"
                onPress={() => alert("WEEE")}
              />
            </View>
            <View>
              <Text style={{ textAlign: "center" }}>Value</Text>
            </View>
            <View style={styles.iconBtn}>
              <MaterialCommunityIcons
                name="minus"
                style={styles.iconsToggle}
                size={25}
                color="green"
                onPress={() => alert("WEEE")}
              />
              <MaterialCommunityIcons
                name="minus"
                style={styles.iconsToggle}
                size={25}
                color="red"
                onPress={() => alert("WEEE")}
              />
            </View>
          </View>
        </DataTable.Cell>

        <DataTable.Cell>
          <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons
              name="minus"
              style={styles.iconsToggle}
              size={25}
              color="red"
              onPress={() => alert("steals minus")}
            />
            <MaterialIcons
              name="add"
              style={styles.iconsToggle}
              size={25}
              color="green"
              onPress={() => alert('add steal')}
            />
          </View>
        </DataTable.Cell>
        <DataTable.Cell>
          <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons
              name="minus"
              style={styles.iconsToggle}
              size={25}
              color="red"
              onPress={() => alert("minus rebounds")}
            />

            <MaterialIcons
              name="add"
              style={styles.iconsToggle}
              size={25}
              color="green"
              onPress={() => handlePressAddRebounds(player)}
            />
            <Text>{player.rebounds}</Text>
          </View>
        </DataTable.Cell>
      </DataTable.Row>
    );
  });

  console.log(playerList);
  console.log(statistics);
  return (
    <View style={{ height: '100%' }}>
      <View style={{ backgroundColor: "rgba(251,251,251,0.60)", height: '12%',justifyContent:'center', width: '25%', alignSelf: 'center', margin: '2%' }}>
        <Text style={{ fontSize: 18, fontWeight: 600 }}>
          <MaterialCommunityIcons
            name="basketball-hoop-outline"
            style={styles.iconsToggle}
            size={30}
            color="green"
          /> =  Success Throw</Text>

        <Text style={{ fontSize: 18, fontWeight: 600, marginTop: 15 }}>
          <MaterialCommunityIcons
            name="basketball-hoop"
            style={styles.iconsToggle}
            size={30}
            color="red"
          /> =  Miss Throw</Text>
      </View>
      <View style={styles.DataTableView}>
        <DataTable style={styles.dataTable}>

          <DataTable.Header style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white' }}>
            <DataTable.Title style={{ fontWeight: 700 }}>Shirt Number</DataTable.Title>
            <DataTable.Title style={styles.shirtNumber}>Player Name</DataTable.Title>
            <DataTable.Title style={styles.title}>FT</DataTable.Title>
            <DataTable.Title style={styles.title}>2PT</DataTable.Title>
            <DataTable.Title style={styles.title}>3PT</DataTable.Title>
            <DataTable.Title style={styles.title}>Steals</DataTable.Title>
            <DataTable.Title style={styles.title}>Rebounds</DataTable.Title>
          </DataTable.Header>

          <ScrollView>{renderPlayers}</ScrollView>
        </DataTable>
      </View>
    </View>
  );
};

export default GameTable;

const styles = StyleSheet.create({
  dataTable: {
    flex: 5,

    backgroundColor: "rgba(251,251,251,0.60)",
  },
  DataTableView: {
    alignSelf: 'center',
    width: "95%",
    height: "60%",
  },
  playerContainer: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
  },
  playerName: {
    justifyContent: 'center',

  },
  iconBtn: {
    flex: 1,
    flexDirection: "row",
  },
  iconsToggle: {
    marginLeft: 30,
  },
  Cell: {
    margin: 0,
    width: "100%",
    alignItems: "center",
  },
  title: {
    fontWeight: 'bold',
  },

});
