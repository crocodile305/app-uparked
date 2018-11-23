/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import LoginCarousel from "./src/pages/LoginCarousel";
import LoginScreen from "./src/pages/LoginScreen";
import Menu from "./src/pages/Menu";
import Configuration from "./src/pages/Configuration";
import PhoneVerify from "./src/pages/PhoneVerify";
import Register from "./src/pages/Register";
import ResetPassword from "./src/pages/ResetPassword";

import { Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox } from 'react-native-router-flux';

export default class App extends Component<Props> {
  render() {
    return (
        <Router>
            <Stack key="root" hideNavBar={true}>
                <Scene key="login"  component={LoginScreen} initial hideNavBar={true} title="Login"/>
                <Scene key="register"  component={Register}  hideNavBar={true} title="Register"/>
                <Scene key="resetPassword"  component={ResetPassword}  hideNavBar={true} title="ResetPassword"/>
                <Scene key="phoneVerify"  component={PhoneVerify}  hideNavBar={true} title="PhoneVerify"/>
                <Scene key="menu"  component={Menu}  hideNavBar={true} title="menu"/>
                <Scene key="configuration"  component={Configuration}  hideNavBar={true} title="Configuration"/>

            </Stack>
        </Router>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
