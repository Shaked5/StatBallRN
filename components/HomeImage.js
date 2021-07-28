import React from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Modal } from "react-native-paper";
import basketBG from "../Images/backgroundLogin.jpg";
import { MaterialIcons } from "@expo/vector-icons";

<<<<<<< HEAD
// const HomeImage = () => {
//     return (
//         <View style={styles.container}>

//             <PlayerTeam />
//             <View style={styles.screenLeft}>
//                 <Text>Statistics</Text>
//             </View>
//         </View>
//     )
// }

// export default HomeImage



// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection:'row',
//     },
//     screenLeft:{
//         flex:2,
//         alignItems:'center',
//         paddingTop:'30%',
//         height: '100%',
//         backgroundColor:'lightgreen',

//     },
//     viewRight:{
       
//     }


// });
=======
const HomeImage = () => {
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground source={basketBG} style={styles.backgroundImage}>
        <View style={styles.buttonContainer}>
          
        <Modal visible={openModal} animationType="slide">
            <View styles={styles.modalContent}>
            <TouchableOpacity>
              <MaterialIcons
                name="Close"
               style={styles.modalButton}
               size={44}
               color="white"
                onPress={() => setOpenModal(false)}
             />
          </TouchableOpacity>
              <Text>hello from modal!</Text>
            </View>
          </Modal>

     
          <TouchableOpacity>
            <MaterialIcons
              name="add"
              style={styles.modalButton}
              size={44}
              color="white"
              onPress={() => setOpenModal(true)}
            />
          </TouchableOpacity>

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
    alignItems: "center",
    width: "100%",
    hight: "100%",
  },
  container: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer:{
    flex:1,
    flexDirection:'row',
    padding:25,
    
  },

  screenLeft: {
    backgroundColor: "lightgreen",
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
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  modalButton: {
    padding:5,
    marginBottom: 10,
    borderRadius: 25,
    backgroundColor: "black",
  },
  modalContent: {},
});
>>>>>>> 7ed9f38e2205bbe40948ee7030354c7632826ce1
