import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { styles } from "../globalstyles/globalStyling";

const Home = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Home Screen</Text>
    <Button
      title="Home Detail Screen  Two"
      onPress={() =>
        navigation.navigate("Details", {
          name: "Detail Screen Two ",
        })
      }
    />
    <Button
      title="Home Detail Screen One"
      onPress={() =>
        navigation.navigate("Details", {
          name: "Detail Screen One",
        })
      }
    />
    <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
  </View>
);

export default Home;
