import React ,{Component} from 'react';
import {Dimensions,TouchableOpacity ,StyleSheet,Image, Text, View,Button} from 'react-native';
import Carousel from "react-native-carousel-control";

export class LoginCarousel extends Component{
    onPress=()=>{
        alert("you clicked me");

    }
    render(){
        return(
            <View style = {styles.parentview}>
                <Carousel pageStyle={styles.maincontainer}>
                    <View style = {styles.itemView}>

                        <View style={ styles.carouselstyle }>
                            <Image style = {styles.imagesize} source={require('../assets/images/park_1.png')} />
                        </View>
                        <Text style = {styles.textStyle}>Encontre vagas de estacionamento
                            de forma simples e segura
                        </Text>
                        <TouchableOpacity style={styles.touchstyle} onPress={this.onPress}>
                            <Text style = {styles.btnStyle}>
                                Iniciar
                            </Text>
                        </TouchableOpacity >
                    </View>
                    <View style = {styles.itemView}>
                        <View style={ styles.carouselstyle }>
                            <Image style = {styles.imagesize} source={require('../assets/images/park_2.png')} />
                        </View>
                        <Text style = {styles.textStyle}>
                            Alugue vagas ociosas de residências
                            ou de estacionamentos particulares
                        </Text>
                        <TouchableOpacity style={styles.touchstyle} onPress={this._onPressButton}>
                            <Text style = {styles.btnStyle}>
                                Iniciar
                            </Text>
                        </TouchableOpacity >
                    </View>
                    <View style = {styles.itemView}>
                        <View style={ styles.carouselstyle }>
                            <Image style = {styles.imagesize} source={require('../assets/images/park_3.png')} />
                        </View>
                        <Text style = {styles.textStyle}>Encontre vagas de estacionamento
                            de forma simples e segura
                        </Text>
                        <TouchableOpacity style={styles.touchstyle} onPress={this._onPressButton}>
                            <Text style = {styles.btnStyle}>
                                Iniciar
                            </Text>
                        </TouchableOpacity >
                    </View>
                </Carousel>
                <View style = {styles.lastview}></View>
            </View>
        )
    }
}



const styles = {
    parentview:{
        alignItems:"center",
    },
    maincontainer:{
        marginTop:Dimensions.get('window').height*0.03,
        // backgroundColor: "red",
        height:Dimensions.get('window').height*0.9,
    },
    itemView:{
        height:Dimensions.get('window').height*0.9,
        alignItems:"center",
        // backgroundColor: "green",
    },
    carouselstyle:{
        backgroundColor: "white",
        borderRadius: 50,
        height: Dimensions.get('window').width-80,
        marginTop:10,

    },
    imagesize:{
        width:Dimensions.get('window').width-120,
        height: Dimensions.get('window').width-120,
        // backgroundColor: "black",
        margin:20,
    },
    textStyle:{
        color:'white',
        textAlign:"center",
        fontSize:15,
        marginTop:Dimensions.get('window').width*0.15,
        marginLeft:20,
        marginRight:20,
        fontWeight:"bold",
    },
    touchstyle:{
        alignItems:"center",
        marginTop:Dimensions.get('window').width*0.15,
        height:Dimensions.get('window').width*0.1,
        width:Dimensions.get('window').width*0.4,
        // backgroundColor:"red",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    btnStyle:{
        backgroundColor:"white",
        color:"#287eff",
        textAlign:"center",
        fontSize:18,
        height:Dimensions.get('window').width*0.09,
        width:Dimensions.get('window').width*0.35,
        borderRadius:Dimensions.get('window').width*0.08*0.5,
        paddingTop:3,

    },
    lastview:{
        height:5,
        width:100,
        borderRadius:5,
        backgroundColor:"white",
        marginBottom:10,
    }
};

export default LoginCarousel ;
