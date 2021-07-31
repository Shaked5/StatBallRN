import React, { useContext } from "react";
import { ImageBackground, View, Text, StyleSheet, Button } from "react-native";
import { Modal } from "react-native-paper";
import basketBG from "../Images/backgroundLogin.jpg";
import { MaterialIcons } from "@expo/vector-icons";
import AddPlayerForm from "./AddPlayerForm";
import { StatBallContext } from "../context";
import PlayerTeam from "../Pages/PlayerTeam";
import UpdatePlayerForm from '../components/UpdatePlayerForm';

const HomeImage = (props) => {
  const {openModal, setOpenModal, EPlayer} = useContext(StatBallContext);



  // const handleAddPlayer = async (player) => {
  //   console.log(player);
  //   let res = await userHandler.AddPlayerById(
  //     player.userId,
  //     player.firstName,
  //     player.lastName,
  //     player.shirtNumber,
  //     player.position,
  //     player.age,
  //     player.height
  //   );
  //   Toast.show({
  //     position: "top",
  //     visibilityTime: 4000,
  //     type: "success",
  //     text1: "Message",
  //     text2: "Add a new player completed 👋",
  //   });
  //   setIsFirstTime(false)
  //   let players = await userHandler.GetPlayersById(player.userId)
  //   setPlayerList(players)
  // }


  return (
    <View style={styles.container}>
      <ImageBackground source={basketBG} style={styles.backgroundImage}>
        <View style={styles.centeredView}>
          <View style={styles.buttonContainer}>
            <MaterialIcons
              name="add"
              style={styles.modalToggle}
              size={44}
              color="white"
              onPress={() => setOpenModal(true)}
            />
            <Text style={styles.text}>Add Player</Text>
          </View>
            {EPlayer === null &&
          <Modal visible={openModal} animationType="slide" transparent={true}>
            <View style={styles.modalView}>
              {/*  inside modal */}
              <MaterialIcons
                name="close"
                size={44}
                color="red"
                style={styles.modalClose}
                onPress={() => setOpenModal(false)}
              />
              <AddPlayerForm handleAddPlayer={(player)=> props.handleAddPlayer(player)} />
            </View>
          </Modal>
           }
           {EPlayer !== null &&   
           <Modal visible={openModal} animationType="slide" transparent={true}>
            <View style={styles.modalView}>
              {/*  inside modal */}
              <MaterialIcons
                name="close"
                size={44}
                color="pink"
                style={styles.modalClose}
                onPress={() =>{
                  console.log("close");  
                
                setOpenModal(false);
              }}
              />
              <UpdatePlayerForm handleUpdatePlayerById={(player) => props.handleUpdatePlayerById(player)} />
            </View>
          </Modal> }
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeImage;

const styles = StyleSheet.create({
  defContiner: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginBottom: '95%',
    backgroundColor: 'black',
    flexDirection: 'row',
    borderRadius: 30,
    padding: 5,
  },



  // flexDirection: "row",
  // padding: 25,
  // backgroundColor:'black',
  // borderRadius:50,

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    hight: "90%",
  },
  text: {
    color: "white",
    fontSize: 20,
    lineHeight: 20,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "black",
    borderRadius: 50,
    padding: 20,

  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingBottom: 50,
    paddingTop: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    hight: "100%",
  },
  modalToggle: {
    borderRadius: 25,
    backgroundColor: "black",
    padding: 5,
    marginTop: 5,
  },
  modalClose: {
    alignSelf: "center",
    hight: "100%",
    borderRadius: 25,
    padding: 5,
    backgroundColor: "black",
  },
});