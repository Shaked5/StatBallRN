import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ProfileBackground from "../Images/basketball_bg.png";
import { StatBallContext } from "../context";

const UserProfile = () => {
  const { user } = useContext(StatBallContext);

  return (
    <View style={styles.centeredView}>
      <View style={styles.mainProfileView}>
        <View style={styles.header}>
          <Text style={styles.text}>User Profile</Text>
        </View>
        <View style={styles.userDetails}>
            <Image
              style={styles.tinyLogo}
              source={require("../Images/success.png")}
            />
           <View>
          <Text style={styles.userText}>Id number : {user.userId}</Text>
          <Text style={styles.userText}>Fullname : {user.fullName}</Text>
          <Text style={styles.userText}>Email : {user.email}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainProfileView: {
    backgroundColor: "#b7b7a4",
    width: "85%",
    height: "85%",
    alignItems: "center",
    borderRadius: 15,
  },
  header: {
    fontSize: 40,
    padding: 30,
    backgroundColor: "#e63946",
    width: "100%",
    textAlign: "center",
  },
  text: {
    fontSize: 40,
  },
  userText: {
    fontSize: 25,
  },
  userDetails: {
    flexDirection:'row',
    backgroundColor: "lightgreen",
    margin: 25,
    padding: 25,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    margin:5,
    marginTop:15,
    marginRight:35,
  },
});
