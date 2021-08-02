import React, { useState, useContext, useEffect } from "react";
import userHandler from "../handler/userHandler";
import { retrieveAsyncStorageData, removeAsyncStorageData } from "../handler/storage";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message";
import { Picker } from "@react-native-picker/picker";
import { StatBallContext } from "../context";

const UpdatePlayerForm = (props) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [shirtNumber, setShirtNumber] = useState("");
  const [position, setPosition] = useState("");
  const [height, setHeight] = useState("");
  const { user, EPlayer } = useContext(StatBallContext);


  useEffect(() => {
    GetValuesFromData()
  }, [])

  const GetValuesFromData = async () => {
    setFirstName(EPlayer.fName)
    setLastName(EPlayer.lName);
    setShirtNumber(EPlayer.shirtNumber);
    setPosition(EPlayer.position);
    setAge(EPlayer.age);
    setHeight(EPlayer.height);
  };

  const UpdatePlayerToData = async () => {

    // Toast.show({
    //   position: "top",
    //   type: "error",
    //   text1: "Warning",
    //   text2: "Please fill all field",
    // });
    props.handleUpdatePlayerById({ playerId: EPlayer.playerId, fName: firstName, lName: lastName, shirtNumber: shirtNumber, position: position, age: age, height: height });
  }




  return (
    <View style={styles.centeredView}>
      <Text style={styles.headText}>Edit Player Form</Text>
      <View style={styles.FormView}>
        <View style={styles.TextInput}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setFirstName(text)}
            defaultValue={EPlayer.fName}
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setLastName(text)}
            defaultValue={EPlayer.lName}
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setShirtNumber(text)}
            defaultValue={EPlayer.shirtNumber}
          />
        </View>

        <View style={styles.TextInput2}>

          <Picker
            style={styles.Picker}
            selectedValue={position}
            onValueChange={(itemValue) =>
              setPosition(itemValue)
            }
          >
            <Picker.Item label="Choose" value="Choose" />
            <Picker.Item label="Point guard" value="Point guard" />
            <Picker.Item label="Shooting guard" value="Shooting guard" />
            <Picker.Item label="Small forward" value="Small forward" />
            <Picker.Item label="Power forward" value="Power forward" />
            <Picker.Item label="Center" value="Center" />
          </Picker>

          <TextInput style={styles.input} defaultValue={EPlayer.age} onChangeText={text => setAge(text)} />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setHeight(text)}
            defaultValue={EPlayer.height}
          />
        </View>
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity
            style={styles.AddPlayerButton}
            onPress={UpdatePlayerToData}

          >
            <Text style={styles.buttonText}>Update Player</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UpdatePlayerForm;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  FormView: {
    flex: 1,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  FormView2: {
    flex: 1,
    flexDirection: "row",
  },
  TextInput: {
    flex: 5,
    flexDirection: "column",
    alignSelf: "left",
  },

  TextInput2: {
    flex: 5,
    flexDirection: "column",
  },

  headText: {
    backgroundColor: "#70e000",
    textAlign: "center",
    width: "80%",
    fontSize: "20pt",
    marginTop: 20,

    marginBottom: 20,
    borderRadius: 20,
    padding: 20,
  },
  Picker: {
    height: 40,
    alignItems: 'center',
    textAlign: 'center',
    margin: 8,
    marginLeft: 35,
  },
  input: {
    height: 15,
    padding: 20,
    margin: 8,
    marginLeft: 35,
    borderWidth: 1,
    textAlign: "center",
  },
  AddPlayerButton: {
    flex: 1,

    flexDirection: "column",
    backgroundColor: "#003049",
    padding: 20,
    alignSelf: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: "15pt",
  },
});