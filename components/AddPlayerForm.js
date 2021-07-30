import React, { useState, useContext } from "react";
import userHandler from "../handler/userHandler";
import { retrieveAsyncStorageData, removeAsyncStorageData} from "../handler/storage";
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from "react-native";
import Toast from "react-native-toast-message";
import { Picker } from "@react-native-picker/picker";
import { StatBallContext } from "../context";

const AddPlayerForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [shirtNumber, setShirtNumber] = useState("");
  const [position, setPosition] = useState("");
  const [height, setHeight] = useState("");
  const {EPlayer} = useContext(StatBallContext);

  const addPlayerToData = async () => {
    console.log("onPress");
    let data = await retrieveAsyncStorageData("user");
    if (data !== undefined && data !== null) {
      if (
        firstName === "" ||
        lastName === "" ||
        shirtNumber === "" ||
        position === "" ||
        age === "" ||
        height === ""
      ) {
        Toast.show({
          position: "bottom",
          type: "error",
          text1: "Warning",
          text2: "Please fill all field",
        });
        return;
      }
      let res = await userHandler.AddPlayerById(
        data.userId,
        firstName,
        lastName,
        shirtNumber,
        position,
        age,
        height
      );

      Toast.show({
        position: "bottom",
        type: "success",
        text1: "Message",
        text2: "Add a new player completed 👋",
      });
      setTimeout(() => {
        window.location.reload();
      }, 4000);
      console.log(position);
    }
  };

  return (
    <View style={styles.centeredView}>
      <Text style={styles.headText}>Add Player Form</Text>
      <View style={styles.FormView}>
        <View style={styles.TextInput}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setFirstName(text)}
            placeholder="First Name"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setLastName(text)}
            placeholder="Last Name"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setShirtNumber(text)}
            placeholder="Shirt Number"
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
            <Picker.Item label="Point guard" value="Point guard" />
            <Picker.Item label="Shooting guard" value="Shooting guard" />
            <Picker.Item label="Small forward" value="Small forward" />
            <Picker.Item label="Power forward" value="Power forward" />
            <Picker.Item label="Center" value="Center" />
          </Picker>

          <TextInput style={styles.input} onChangeText={text => setAge(text)} placeholder="Age" />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setHeight(text)}
            placeholder="Height"
          />
        </View>
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity
            style={styles.AddPlayerButton}
            onPress={addPlayerToData}
          >
            <Text style={styles.buttonText}>Add Player</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddPlayerForm;

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
    backgroundColor: "#e63946",
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