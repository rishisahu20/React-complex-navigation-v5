import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { styles } from "../globalstyles/globalStyling";

const ProductSearch = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Product Search Screen</Text>
    <Button
      title="Product Info Screen"
      onPress={() => navigation.navigate("ProductInfo")}
    />
    <Button
      title="Detail Screen One"
      onPress={() => {
        navigation.navigate("Home", {
          screen: "Details",
          params: { name: "Detail Screen One" },
        });
      }}
    />
  </View>
);

export default ProductSearch;
