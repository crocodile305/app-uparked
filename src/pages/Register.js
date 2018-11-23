import React ,{Component} from 'react';
import {Dimensions,TouchableOpacity ,StyleSheet,Image, TextInput,Text, View,Button} from 'react-native';


export class Register extends Component{

    render(){
        return (
            <View style = {styles.container}>
                <View style={styles.navbar}>
                    <View style = {styles.rowview}>
                        <TextInput style ={styles.txtinput} placeholder="Nome Completo" secureTextEntry={true} placeholderTextColor="#BDBDBD"/>
                    </View>
                </View>
                <View>
                    <View style = {styles.rowview}>
                        <TextInput style ={styles.txtinput} placeholder="E-mail" secureTextEntry={true} placeholderTextColor="#BDBDBD"/>
                    </View>
                </View>

                <View>
                    <View style = {styles.rowview}>
                        <TextInput style ={styles.txtinput} placeholder="Número de celular (apenas números)" secureTextEntry={true} placeholderTextColor="#BDBDBD"/>
                    </View>
                </View>
                <View>
                    <View style = {styles.rowview}>
                        <TextInput style ={styles.txtinput} placeholder="Senha" secureTextEntry={true} placeholderTextColor="#BDBDBD"/>
                    </View>
                </View>
                <View style = {{marginTop:80,}}>
                    <Text>Ao se registrar, você concorda com os nossos</Text>
                    <View style ={styles.detailtxt}>
                        <TouchableOpacity><Text style = {styles.touchtxt} >termos & condições</Text></TouchableOpacity>
                        <Text> e </Text>
                        <TouchableOpacity><Text style = {styles.touchtxt} >política de privacidade</Text></TouchableOpacity>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style = {styles.btn}>
                        <Text  style = {styles.btntxt}>
                            CADASTRE-SE
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    };
};

const styles = {
    container:{
        backgroundColor:"#FAFAFA",
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
        alignItems:"center",
    },
    navbar:{
        marginTop:Dimensions.get('window').height*0.1,
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
    txtinput:{
        marginLeft:20,
    },
    detailtxt:{
        flexDirection: 'row',
    },
    touchtxt:{
        color:"#007ECC",
    },
    btn:{
        backgroundColor:"#008CE2",
        width:Dimensions.get('window').width*0.5,
        height:Dimensions.get('window').width*0.1,
        marginTop:Dimensions.get('window').width*0.1,
        alignItems:"center",
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
        color:"white",
        alignSelf:"center",
        marginTop:Dimensions.get('window').width*0.1*0.25,
    },
};
export default Register;