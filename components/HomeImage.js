import React, { useContext } from "react";
import { ImageBackground, View, Text, StyleSheet, Button } from "react-native";
import { Modal } from "react-native-paper";
import basketBG from "../Images/backgroundLogin.jpg";
import { MaterialIcons } from "@expo/vector-icons";
import AddPlayerForm from "./AddPlayerForm";
import { StatBallContext } from "../context";
import PlayerTeam from "../Pages/PlayerTeam";

const HomeImage = () => {
  const {openModal, setOpenModal} = useContext(StatBallContext);
  const { EPlayer } = useContext(StatBallContext);

  const handleOpenModal = () => {
    debugger;
    console.log('hey');
    setOpenModal(true);
  }

  return (
    <View style={styles.container}>
      {EPlayer !== null && setOpenModal(true)}
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
                color="white"
                style={styles.modalClose}
                onPress={() => setOpenModal(false)}
              />
              <AddPlayerForm />
            </View>
          </Modal>
           }
           {EPlayer !== null &&   <Modal visible={openModal} animationType="slide" transparent={true}>
            <View style={styles.modalView}>
              {/*  inside modal */}
              <MaterialIcons
                name="close"
                size={44}
                color="white"
                style={styles.modalClose}
                onPress={() => setOpenModal(false)}
              />
              <PlayerTeam />
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
