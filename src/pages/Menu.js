import React ,{Component} from 'react';
import {Dimensions,TouchableOpacity ,StyleSheet,Image, TextInput,Text, View,Button} from 'react-native';


export class Menu extends Component{

    render(){
        return (
            <View style = {styles.container}>
                <View style = {styles.myinfo}>
                    <View style = {styles.imagecircle1}>
                        <View style = {styles.imagecircle2}>
                            <Image style = {styles.myphotoimg} source = {require('../assets/images/1.jpg')}/>
                        </View>
                    </View>
                    <View style = {styles.myinfodetail}>
                        <Text style = {styles.myname}>Renan</Text>
                        <Text style = {styles.mynamedetail}>São Paulo - SP</Text>
                    </View>
                </View>
                <View style = {styles.menucontainer}>
                    <TouchableOpacity style = {styles.menuitem}>
                        <Image style = {styles.menuitemicon} source = {require('../assets/icons/folder.png')}/>
                        <Text style = {styles.menuitemtext}>Minha conta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.menuitem}>
                        <Image style = {styles.menuitemicon} source = {require('../assets/icons/notification.png')}/>
                        <Text style = {styles.menuitemtext}>Notificações</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.menuitem}>
                        <Image style = {styles.menuitemicon} source = {require('../assets/icons/account.png')}/>
                        <Text style = {styles.menuitemtext}>Pedidos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.menuitem}>
                        <Image style = {styles.menuitemicon} source = {require('../assets/icons/customer_service.png')}/>
                        <Text style = {styles.menuitemtext}>Ajuda</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.menuitem}>
                        <Image style = {styles.menuitemicon} source = {require('../assets/icons/Terms.png')}/>
                        <Text style = {styles.menuitemtext}>Termos e condições</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.menuconfig}>
                    <TouchableOpacity style ={styles.menuconfigitem}>
                        <Image style = {styles.menuconfigimg} source = {require('../assets/icons/config.png')}/>
                        <Text style = {styles.menuconfigitemtext}>CONFIGURAÇÕES</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style ={styles.menuconfigitem}>
                        <Image style = {styles.menuconfigimg} source = {require('../assets/icons/logout.png')}/>
                        <Text style = {styles.menuconfigitemtext}>SAIR</Text>
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
    myinfo:{
        // backgroundColor:"red",
        marginTop:Dimensions.get('window').height*0.1,
        width:Dimensions.get('window').width,
        flexDirection: 'row',
    },
    myphotoimg:{
        width:Dimensions.get('window').width*0.25*0.85,
        height:Dimensions.get('window').width*0.25*0.85,
        borderRadius:Dimensions.get('window').width*0.25*0.85*0.5,
        marginTop:Dimensions.get('window').width*0.25*0.05*0.5,
    },
    imagecircle1:{
        width:Dimensions.get('window').width*0.25,
        height:Dimensions.get('window').width*0.25,
        marginLeft:Dimensions.get('window').width*0.1,
        borderRadius:Dimensions.get('window').width*0.25*0.5,
        alignItems:"center",
        backgroundColor:"white",
    },
    imagecircle2:{
        width:Dimensions.get('window').width*0.25*0.9,
        height:Dimensions.get('window').width*0.25*0.9,
        borderRadius:Dimensions.get('window').width*0.25*0.9*0.5,
        backgroundColor:"#008CE2",
        alignItems:"center",
        marginTop:Dimensions.get('window').width*0.25*0.1*0.5,
    },
    myinfodetail:{
        marginLeft:Dimensions.get('window').width*0.1,
        marginTop:Dimensions.get('window').width*0.25*0.2,
    },
    myname:{
        fontSize:25,
        color:"white",
        fontWeight:'bold',
    },
    mynamedetail:{
        fontSize:15,
        color:"white",
        fontWeight:'bold',
    },
    menucontainer:{
        // backgroundColor:"green",
        marginTop:Dimensions.get('window').width*0.1,
        width:Dimensions.get('window').width,
    },
    menuitem:{
        // backgroundColor:"red",
        flexDirection: 'row',
        marginTop:Dimensions.get('window').width*0.05,
        marginLeft:Dimensions.get('window').width*0.1,
    },
    menuitemicon:{
        width:32,
        height:32,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuitemtext:{
        marginLeft:Dimensions.get('window').width*0.1,
        alignSelf: "center",
        fontSize:20,
        color:"white",
    },
    menuconfig:{
        marginTop:Dimensions.get('window').width*0.2,
        width:Dimensions.get('window').width,
        flexDirection: 'row',

    },
    menuconfigimg:{
        width:32,
        height:32,
    },
    menuconfigitem:{
        flexDirection: 'row',
        width:Dimensions.get('window').width*0.4,
        marginLeft:Dimensions.get('window').width*0.1,
    },
    menuconfigitemtext:{
        marginLeft:5,
        alignSelf: "center",
        fontSize:13,
        fontWeight:'bold',
        color:"white",
    },
};
export default Menu;