import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import { styles } from "../globalstyles/globalStyling";

const Details = ({ route }) => (
  <View style={styles.container}>
    <Text>Details Screen</Text>
    {route.params.name && <Text>{route.params.name}</Text>}
  </View>
);

export default Details;
