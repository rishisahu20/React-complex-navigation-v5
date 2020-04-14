import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import { userLoginData } from "../redux/Actions/userAction";
import { styles } from "../globalstyles/globalStyling";

const SignIn = ({ navigation, userLoginData }) => {
  return (
    <View style={styles.container}>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={() => userLoginData(true)} />
      <Button
        title="Create Account"
        onPress={() => navigation.navigate("CreateAccount")}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { userLoginData })(SignIn);
