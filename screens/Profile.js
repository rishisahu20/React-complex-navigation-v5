import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import { userLoginData } from "../redux/Actions/userAction";
import { styles } from "../globalstyles/globalStyling";

const Profile = ({ navigation, userLoginData }) => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Sign Out" onPress={() => userLoginData(false)} />
    </View>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { userLoginData })(Profile);
