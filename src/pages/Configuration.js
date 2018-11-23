import React ,{Component} from 'react';
import {Dimensions,TouchableOpacity ,StyleSheet,Image,Switch, TextInput,Text, View,Button} from 'react-native';


export class Configuration extends Component{
    state = {
        taskCreated: false,
    };

    onChangeFunction(newState) {
        this.setState(newState, () => alert("Changed", "==> " + this.state.taskCreated));
    }
    render(){
        return (
            <View style = {styles.container}>
                <View style = {styles.mainView}>
                    <View style = {styles.titles}>
                        <Text style = {styles.titletext}>GERAL</Text>
                    </View>
                    <View style = {styles.rowitems}>
                        <Text style ={styles.itemtitle}>Nome</Text>
                        <Text style = {styles.itemtexts}>Thor Odinson</Text>
                    </View>
                    <View style = {styles.rowbordermake}></View>
                    <View style = {styles.rowitems}>
                        <Text style ={styles.itemtitle}>Email</Text>
                        <Text style = {styles.itemtexts}>deusdotrovao@gmail.com</Text>
                    </View>
                    <View style = {styles.rowbordermake}></View>
                    <View style = {styles.rowitems}>
                        <Text style ={styles.itemtitle}>Senha</Text>
                        <Text style = {styles.itemtexts}>........</Text>
                    </View>
                    <View style = {styles.rowbordermake}></View>
                    <View style = {styles.rowitems}>
                        <Text style ={styles.itemtitle}>Nascimento</Text>
                        <Text style = {styles.itemtexts}>7 de Janeiro de 518</Text>
                    </View>
                    <View style = {styles.titles}>
                        <Text style = {styles.titletext}>NOTIFICAÇÕES</Text>
                    </View>
                    <View style = {styles.rowswitch}>
                        <View style ={styles.rowswitchitemname}>
                            <Text >Notificações por e-mail</Text>
                        </View>
                        <View style={styles.rowswitchitemdetail} >
                            <Switch   />
                        </View>
                    </View>
                    <View style = {styles.rowbordermake}></View>
                    <View style = {styles.rowswitch}>
                        <View style ={styles.rowswitchitemname}>
                            <Text >Notificações por celular</Text>
                        </View>
                        <View style={styles.rowswitchitemdetail} >
                            <Switch   />
                        </View>

                    </View>
                    <View style = {styles.rowbordermake}></View>
                    <View style = {styles.rowswitch}>
                        <View style ={styles.rowswitchitemname}>
                            <Text >Vagas disponíveis</Text>
                        </View>
                        <View style={styles.rowswitchitemdetail} >
                            <Switch onValueChange={(value) => this.onChangeFunction({taskCreated: value})}
                                    value={this.state.taskCreated} />
                        </View>

                    </View>
                </View>


            </View>
        )
    };
};

const styles = {
    container:{
        backgroundColor:"#fff",
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
        alignItems:"center",

    },
    mainView:{
        marginTop:Dimensions.get('window').height*0.1,
    },
    titles:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height*0.08,
        backgroundColor:"#F2F2F2",
        justifyContent: 'center',
    },
    titletext:{
        marginLeft:Dimensions.get('window').width*0.1,
        fontWeight:"bold",
    },
    rowitems:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height*0.1,
        backgroundColor:"#F9F9F9",
        justifyContent: 'center',

    },
    rowbordermake:{
        width:Dimensions.get('window').width,
        height:1.5,
        backgroundColor:"#F2F2F2",
    },
    itemtitle:{
        marginLeft:Dimensions.get('window').width*0.1,
        fontSize:18,
    },
    itemtexts:{
        marginLeft:Dimensions.get('window').width*0.1,
        color:"gray",
        fontSize:13,
    },
    rowswitch:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height*0.1,
        backgroundColor:"#F9F9F9",
        flexDirection: 'row',
        // justifyContent: 'center',

    },
    rowswitchitemname:{
        marginLeft:Dimensions.get('window').width*0.1,
        fontSize:18,
        width:Dimensions.get('window').width*0.5,
        alignSelf: "center",
    },
    rowswitchitemdetail:{
        marginLeft:Dimensions.get('window').width*0.1,
        fontSize:18,
        width:Dimensions.get('window').width*0.25,
        alignSelf: "center",
    },

};
export default Configuration;