import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
// import { StackViewStyleInterpolator } from 'react-navigation-stack';
import { Scene, Router, Actions, Reducer, ActionConst, Overlay, Tabs, Modal, Drawer, Stack, Lightbox } from 'react-native-router-flux';
import LoginScreen from "./src/pages/LoginScreen";
import Menu from "./src/pages/Menu";
export class Routes extends Component{
    render(){
        return (
            <Router>
                <Stack key="root" hideNavBar={true}>
                 <Scene key="login"  component={Menu}   title="Login"/>
                </Stack>

            </Router>
        );
    }
}


export default Routes;