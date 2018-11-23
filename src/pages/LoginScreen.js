import React ,{Component} from 'react';
import {Dimensions,TouchableOpacity ,StyleSheet,Image, TextInput,Text, View,Button} from 'react-native';



export class LoginScreen extends Component{

    static navigationOptions={
        title: 'Welcome',
    };
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.logoview}>
                    <Image style = {styles.logo} source = {require('../assets/images/logo.png')}/>
                </View>
                <View style = {{marginTop:50,}}></View>
                <View style = {styles.rowview}>
                    <View style = {styles.personicon}>
                        <Image style = {styles.iconview} source = {require('../assets/icons/person.png')}/>
                    </View>
                    <TextInput placeholder="E-mail" placeholderTextColor="#BDBDBD"/>
                </View>
                <View style = {styles.rowview}>
                    <View style = {styles.personicon}>
                        <Image style = {styles.iconview} source = {require('../assets/icons/lock.png')}/>
                    </View>
                    <TextInput placeholder="Senha" secureTextEntry={true} placeholderTextColor="#BDBDBD"/>
                </View>
                <View style = {styles.textbtnrow}>
                    <TouchableOpacity style = {styles.touchmain}>
                        <Text style = {styles.texttouch}>Registre-se</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.touchmain}>
                        <Text style = {styles.texttouch}>Esqueceu sua senha?</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style = {styles.loginbtn}>
                        <Text style = {styles.loginbtntext}>LOGIN</Text>
                        {/*<Image style = {styles.loginbtnimg} source = {require('../assets/images/login.png')}/>*/}
                    </TouchableOpacity>
                </View>
                <View style = {styles.lineview}>
                    <View style = {styles.drawlineview}></View>
                    <View style = {styles.textouview}><Text>OU</Text></View>
                    <View style = {styles.drawlineview}></View>
                </View>
                <View style = {styles.sociallogin}>
                    <View style = {styles.midsocialview}>
                        <TouchableOpacity style = {styles.socialbtnlogin}><Image style = {styles.socialbtnimg} source = {require('../assets/icons/social_fb.png')}/></TouchableOpacity>
                        <TouchableOpacity style = {styles.socialbtnlogin}><Image style = {styles.socialbtnimg} source = {require('../assets/icons/social_g.png')}/></TouchableOpacity>
                    </View>

                </View>

            </View>
        )
    }
}
const styles = {
    container:{
        backgroundColor:"white",
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
        alignItems:"center",
    },
    logoview:{
        marginTop:Dimensions.get('window').height*0.15,
    },
    logo:{
        width:Dimensions.get('window').width*0.4,
        height:Dimensions.get('window').width*0.4*0.23,
    },
    rowview:{
        height:50,
        width:Dimensions.get('window').width*0.8,
        borderRadius:25,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop:20,
        shadowColor: "#707070",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2.00,

        elevation: 5,
    },
    iconview:{
        alignItems:"center",
        width: 20,
        height:20,
    },
    personicon:{
        marginLeft:25,
    },
    textbtnrow:{
        width:Dimensions.get('window').width,
        flexDirection: 'row',
        marginLeft:Dimensions.get('window').width*0.1,
        marginRight:Dimensions.get('window').width*0.1,
        marginTop:30,

    },
    texttouch:{
        fontSize:12,
        color:"#78849E",

    },
    touchmain:{
        textAlign:"center",
        marginLeft:Dimensions.get('window').width*0.15,
    },
    loginbtn:{
        backgroundColor:"#008CE2",
        marginTop:30,
        alignItems:"center",
        height:Dimensions.get('window').width*0.3*0.3,
        width:Dimensions.get('window').width*0.3,
        borderRadius:Dimensions.get('window').width*0.3*0.3*0.5,
        shadowColor: "#707070",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.15,
        shadowRadius: 2.00,
        elevation: 5,

    },
    loginbtntext:{
        color:"white",
        marginTop:Dimensions.get('window').width*0.3*0.3*0.2,
    },
    loginbtnimg:{
        height:Dimensions.get('window').width*0.3*0.3,
        width:Dimensions.get('window').width*0.3,
    },
    lineview:{
        // backgroundColor:"black",
        marginTop:50,
        flexDirection: 'row',
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').width*0.3*0.3,
    },
    drawlineview:{
        marginLeft:10,
        marginRight:10,
        marginTop:Dimensions.get('window').width*0.3*0.3*0.4,
        backgroundColor:"#78849E",
        width:Dimensions.get('window').width*0.4,
        height:2,
    },
    textouview:{
        // backgroundColor:"red",
        marginTop:Dimensions.get('window').width*0.3*0.3*0.15,
    },
    sociallogin:{
        marginTop:30,
        alignItems:"center",
        width:Dimensions.get('window').width,
        // backgroundColor:"red",
    },
    midsocialview:{
        // backgroundColor:"green",
        flexDirection:"row",

    },
    socialbtnlogin:{
        width:50,
        height:50,
        borderRadius:25,
        alignItems:"center",
        // backgroundColor:"#008CE2",
        marginLeft:10,
        marginRight:10,
    },
    socialbtntext:{
        color:"white",
        fontSize:25,
        fontFamily:"",
    },
    socialbtnimg:{
        width:50,
        height:50,
    },
};

export default LoginScreen ;