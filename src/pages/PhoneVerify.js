import React ,{Component} from 'react';
import {Dimensions,TouchableOpacity ,StyleSheet,Image, TextInput,Text, View,Button} from 'react-native';


export class PhoneVerify extends Component{

    render(){
        return (
            <View style = {styles.container}>
                <TouchableOpacity>
                    <Image style = {styles.menuclose} source = {require('../assets/icons/close.png')}/>
                </TouchableOpacity>
                <View style = {styles.detailview}>
                    <Text style = {styles.detailtext}>
                        Digite o código que recebeu
                    </Text>
                    <Text style = {styles.detailtext}>
                        no seu celular.
                    </Text>
                </View>
                <View>
                    <TextInput style = {styles.codeinput}>
                    </TextInput>
                    <View style = {styles.linerow}>
                        <View style = {styles.midline}></View>
                        <View style = {styles.midline}></View>
                        <View style = {styles.midline}></View>
                        <View style = {styles.midline}></View>
                    </View>
                    <TouchableOpacity style = {styles.btn}>
                        <Text  style = {styles.btntxt}>
                            FINALIZAR
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    };
};

const styles = {
    container:{
        backgroundColor:"#008CE2",
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
        alignItems:"center",
    },
    menuclose:{
        marginTop:Dimensions.get('window').width*0.1,
        marginLeft:Dimensions.get('window').width*0.8,
        width:16,
        height:16,
    },
    detailview:{
        justifyContent: 'center',
        width:Dimensions.get('window').width*0.7,
        // backgroundColor:"green",
        marginTop:Dimensions.get('window').height*0.2,

    },
    detailtext:{
        fontSize:21,
        color:"white",
        alignSelf:"center",

    },
    codeinput:{
        fontSize:100,
        // height:
        letterSpacing:14,
        // backgroundColor:"green",
        width:Dimensions.get('window').width*0.75,
    },
    linerow:{
        flexDirection: 'row',
    },
    midline:{
        backgroundColor:"white",
        width:Dimensions.get('window').width*0.15,
        height:1,
        marginRight:Dimensions.get('window').width*0.05,
    },
    btn:{
        backgroundColor:"white",
        width:Dimensions.get('window').width*0.5,
        height:Dimensions.get('window').width*0.1,
        marginTop:Dimensions.get('window').width*0.2,
        alignSelf:"center",
        borderRadius:Dimensions.get('window').width*0.1*0.5,
        shadowColor: "#707070",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2.00,
        elevation: 5,
    },
    btntxt:{
        color:"#008CE2",
        alignSelf:"center",
        marginTop:Dimensions.get('window').width*0.1*0.25,
    },

};
export default PhoneVerify;