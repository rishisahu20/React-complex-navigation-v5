import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import { userLoginData } from "../redux/Actions/userAction";
import { styles } from "../globalstyles/globalStyling";

const CreateAccount = (props) => {
  return (
    <View style={styles.container}>
      <Text>Create Account Screen</Text>
      <Button title="Sign Up" onPress={() => props.userLoginData(true)} />
    </View>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { userLoginData })(CreateAccount);
