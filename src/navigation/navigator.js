import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { connect } from "react-redux";
import SignIn from "../screens/SignIn";
import CreateAccount from "../screens/CreateAccount";
import ProductSearch from "../screens/ProductSearch";
import ProductInfo from "../screens/ProductInfo";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Details from "../screens/Details";

const RootStack = createStackNavigator();

const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ProductStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tabs = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: "Sign In" }}
    />
    <AuthStack.Screen
      name="CreateAccount"
      component={CreateAccount}
      options={{ title: "Create Account" }}
    />
  </AuthStack.Navigator>
);

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen
      name="Details"
      component={Details}
      options={({ route }) => ({
        title: route.params.name,
      })}
    />
  </HomeStack.Navigator>
);

const ProductStackScreen = () => (
  <ProductStack.Navigator>
    <ProductStack.Screen name="Product Search" component={ProductSearch} />
    <ProductStack.Screen name="ProductInfo" component={ProductInfo} />
  </ProductStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    <Tabs.Screen name="Product" component={ProductStackScreen} />
  </Tabs.Navigator>
);

const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Profile">
    <Drawer.Screen name="Home" component={TabsScreen} />
    <Drawer.Screen name="Profile" component={ProfileStackScreen} />
  </Drawer.Navigator>
);

export const RootStackScreen = ({ login }) => (
  <RootStack.Navigator headerMode="none">
    {login ? (
      <RootStack.Screen
        name="App"
        component={DrawerScreen}
        options={{
          animationEnabled: false,
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
    )}
  </RootStack.Navigator>
);

const RootNavigator = (props) => {
  return (
    <NavigationContainer>
      <RootStackScreen login={props.login} />
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({
  login: state.userData.login,
});

export default connect(mapStateToProps, {})(RootNavigator);
