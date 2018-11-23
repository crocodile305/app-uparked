import React ,{Component} from 'react';
import {Dimensions,TouchableOpacity ,StyleSheet,Image, TextInput,Text, View,Button} from 'react-native';


export class ResetPassword extends Component{

    render(){
        return (
            <View style = {styles.container}>
                <TouchableOpacity>
                    <Image style = {styles.menuclose} source = {require('../assets/icons/close.png')}/>
                </TouchableOpacity>
                <View style = {styles.protectimg}>
                    <View style = {styles.img1}>
                        <View style = {styles.img2}>
                            <View style = {styles.img3}>
                                <View style = {styles.img4}>
                                    <Image style = {styles.mainimage} source = {require('../assets/images/password_reset.png')}/>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style = {styles.sometextview}>
                    <Text style ={styles.sometext}>
                        Para redefinir sua senha, digite
                        seu endereço de e-mail.
                    </Text>
                </View>
                <View style = {styles.emailview}>
                    <Image style = {styles.iconemail} source = {require('../assets/icons/email.png')}/>
                    <TextInput placeholder="Endereço de E-mail" placeholderTextColor="#8FCCF2"/>
                </View>
                <View style = {styles.linemake}></View>
                <View>
                    <TouchableOpacity style={styles.btnmake}>
                        <Text style = {styles.btntext}>
                            RECUPERAR SENHA
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
    protectimg:{
        // backgroundColor:"green",
        // marginTop:Dimensions.get('window').width*0.1,
        width:Dimensions.get('window').width,
        // height:Dimensions.get('window').width*0.3,
        alignItems:"center",
    },
    mainimage:{
        justifyContent: 'center',
        alignSelf: "center",
        width:Dimensions.get('window').width*0.3,
        height:Dimensions.get('window').width*0.3,

    },
    img1:{
        justifyContent: 'center',
        backgroundColor:"#1895E1",
        alignItems:"center",
        alignSelf: "center",
        width:Dimensions.get('window').width*0.7,
        height:Dimensions.get('window').width*0.7,
        borderRadius:Dimensions.get('window').width*0.7*0.5,
    },
    img2:{
        justifyContent: 'center',
        backgroundColor:"#2A9BE1",
        alignSelf: "center",
        width:Dimensions.get('window').width*0.6,
        height:Dimensions.get('window').width*0.6,
        borderRadius:Dimensions.get('window').width*0.6*0.5,
    },
    img3:{
        justifyContent: 'center',
        backgroundColor:"#3BA1E0",
        alignSelf: "center",
        width:Dimensions.get('window').width*0.5,
        height:Dimensions.get('window').width*0.5,
        borderRadius:Dimensions.get('window').width*0.5*0.5,
    },
    img4:{
        justifyContent: 'center',
        backgroundColor:"#4FA8DF",
        alignSelf: "center",
        width:Dimensions.get('window').width*0.4,
        height:Dimensions.get('window').width*0.4,
        borderRadius:Dimensions.get('window').width*0.4*0.5,
    },
    menuclose:{
        marginTop:Dimensions.get('window').width*0.1,
        marginLeft:Dimensions.get('window').width*0.8,
        width:16,
        height:16,
    },
    sometextview:{
        marginTop:Dimensions.get('window').width*0.1,
        width:Dimensions.get('window').width*0.6,


    },
    sometext:{
        textAlign:"center",
        color:"white",
        fontWeight:"bold",
    },
    iconemail:{
        width:32,
        height:32,
    },
    emailview:{
        flexDirection: 'row',
        alignItems:"center",
        width:Dimensions.get('window').width,
        marginLeft:Dimensions.get('window').width*0.15,
        marginTop:Dimensions.get('window').width*0.1,
        // backgroundColor:"red",
    },
    linemake:{
        width:Dimensions.get('window').width*0.85,
        height:1,
        marginLeft:Dimensions.get('window').width*0.15,
        marginRight:Dimensions.get('window').width*0.15,
        backgroundColor:"white",

    },
    btnmake:{
        backgroundColor:"white",
        marginTop:Dimensions.get('window').width*0.1,
        borderRadius:Dimensions.get('window').width*0.1*0.5,
        width:Dimensions.get('window').width*0.5,
        height:Dimensions.get('window').width*0.1,
    },
    btntext:{
        textAlign:"center",
        alignSelf: "center",
        marginTop:Dimensions.get('window').width*0.1*0.25,
        color:"#0073B8",
    },
};
export default ResetPassword;