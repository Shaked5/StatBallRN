import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation  } from '@react-navigation/native';
import basketBG from "../Images/backgroundLogin.jpg";
import GameTable from "./GameTable";


const Stack = createStackNavigator();
const GamesImage = () => {
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  const navigation = useNavigation();





  return (
    <View style={styles.centeredView}>
      <ImageBackground source={basketBG} style={styles.backgroundImage}>
        <View style={styles.createGame}>
          <View style={styles.insideCenteredView}>
            <Text style={styles.text}>Create Game</Text>
            <View style={styles.teams}>
              <View style={styles.allTeams}>
                <Text style={styles.teamText}>Home Team</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(homeName) => setHomeTeam(homeName)}
                  placeholder="Enter Team Name"
                />
              </View>
              <View style={styles.allTeams}>
                <Text style={styles.teamText}>Away Team</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(awayTeam) => setAwayTeam(awayTeam)}
                  placeholder="Enter Team Name"
                />

              </View>
            </View>
            <TouchableOpacity
              style={styles.insideCenteredView}
              onPress={()=> {
                navigation.navigate('Play')

              }}
            >
              <Text style={styles.buttonText}>Add Game</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default GamesImage;

const styles = StyleSheet.create({
  centeredView: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "center",
  },
  createGame: {
    margin: 22,
    marginBottom: "20%",
    width: 570,
    height: 550,
    flexDirection: "row",
    backgroundColor: "#f1faee",
    borderRadius: 30,
  },
  insideCenteredView: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },
  text: {
    fontSize: 40,
    padding: 30,
    backgroundColor: "#e63946",
    width: "100%",
    textAlign: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    hight: "90%",
  },

  allTeams: {

  },

  teams: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  teamText: {
    textAlign: "center",
    fontSize: 28,
    padding: 25,
    margin: 25,
    marginBottom: 0,
    borderRadius: 15,
    backgroundColor: "lightgreen",
  },
  input: {
    alignSelf: 'center',
    height: 15,
    padding: 20,
    width: '80%',
    margin: 20,
    textAlign: "center",
    borderRadius: 10,

  },
  buttonText: {
    fontSize: 30,
    padding: 25,
    backgroundColor: 'orange',
    borderRadius: 15,

  },
});