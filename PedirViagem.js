import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    TouchableWithoutFeedback, Pressable
} from "react-native";
import {Entypo, FontAwesome5, Foundation, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {useFonts} from "expo-font";
import {useEffect, useCallback, useState} from "react";
import * as SplashScreen from "expo-splash-screen";
import DropdownComponent from "./DropdownComponent";
import DatePick from "./DatePick";
import DatePick1 from "./DatePick1";
import DropdownComponent2 from "./DropdownComponent2";
import DropdownComponent3 from "./DropdownComponent3";
import DropdownComponent4 from "./DropdownComponent4";
import DropdownComponent5 from "./DropdownComponent5";






const PedirViagem= ()=>{

    const navigation=useNavigation();


    const [isActive, setIsActive] = useState(false);
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);

    const handleClick = () => {
        setIsActive(current => !current);

    };
    const handleClick1 = () => {
        setIsActive1(current => !current);

    };
    const handleClick2 = () => {
        setIsActive2(current => !current);

    };
    const handleClick3 = () => {
        setIsActive3(current => !current);

    };

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={styles.topView}>
                <Text
                    style={{
                        fontSize:25,
                        fontFamily:"Inter-SemiBold",
                    }}
                >Pedido de Viagem</Text>
                <MaterialCommunityIcons name="bell" size={27} color="black" style={{marginTop: 5}}/>
            </View>
            <View style={styles.header}>
                <Text
                    style={{
                        fontSize:15,
                        fontFamily:"Inter-SemiBold",
                        marginTop:20,
                        marginBottom:10
                    }}>
                    Destino de Viagem</Text>
            </View>
            <View style={styles.dropdowsyle}>
                <DropdownComponent></DropdownComponent>
            </View>
            <View style={styles.dropdata}>
                <View>
                    <Text style={{marginTop:15, marginBottom:3,fontSize:15, fontFamily:"Inter-SemiBold",}}>Ida</Text>
                    <DatePick></DatePick>
                </View>
                <View>
                    <Text style={{marginTop:15, marginBottom:3,fontSize:15, fontFamily:"Inter-SemiBold",}}>Volta</Text>
                    <DatePick1></DatePick1>
                </View>
            </View>

            <View style={{marginStart:"5%", marginTop:10}}>
                <Text
                    style={{
                        fontSize:15,
                        fontFamily:"Inter-SemiBold",
                        marginTop:10,
                        marginBottom:10
                    }}>
                    Número de Viajantes</Text>
            </View>
            <View style={styles.dropdowsyle}>
                <DropdownComponent2></DropdownComponent2>
            </View>

            <View style={{marginStart:"5%", marginTop:10}}>
                <Text
                    style={{
                        fontSize:15,
                        fontFamily:"Inter-SemiBold",
                        marginTop:10,
                    }}>
                    Interesses</Text>
                <Text
                    style={{
                        fontSize:13,
                        fontFamily:"Inter-Regular",
                        marginBottom:10
                    }}>
                    Seleciona 4 Opções</Text>

                <View style={styles.iconss}>
                    <TouchableOpacity  onPress={handleClick3} style={ [{ backgroundColor: isActive3 ? "#FCE8DD" : 'white', borderColor: isActive3 ? "coral" : 'black' }, styles.iconscont ]}>
                        <FontAwesome5 name="glass-martini-alt" size={24} color="black" />
                        <Text
                            style={{
                                fontSize:10,
                                fontFamily:"Inter-Regular",
                                marginTop:2
                            }}>Noite</Text>
                    </TouchableOpacity>
                    <View style={styles.iconscont}>
                        <Entypo name="dribbble" size={24} color="black" />
                        <Text
                            style={{
                                fontSize:10,
                                fontFamily:"Inter-Regular",
                                marginTop:2
                            }}>Desporto</Text>
                    </View>
                    <View style={styles.iconscont}>
                        <Entypo name="feather" size={24} color="black" />
                        <Text
                            style={{
                                fontSize:10,
                                fontFamily:"Inter-Regular",
                                marginTop:2
                            }}>Animais</Text>
                    </View>
                    <View style={styles.iconscont}>
                        <Entypo name="game-controller" size={24} color="black" />
                        <Text
                            style={{
                                fontSize:10,
                                fontFamily:"Inter-Regular",
                                marginTop:2
                            }}>Jogos</Text>
                    </View>
                </View>
                <View style={styles.iconss}>
                    <View style={styles.iconscont}>
                        <Ionicons name="restaurant" size={24} color="black" />
                        <Text
                            style={{
                                fontSize:10,
                                fontFamily:"Inter-Regular",
                                marginTop:2
                            }}>Gastronomia</Text>
                    </View>
                    <TouchableOpacity  onPress={handleClick} style={ [{ backgroundColor: isActive ? "#FCE8DD" : 'white', borderColor: isActive ? "coral" : 'black' }, styles.iconscont ]}>
                        <Entypo name="camera" size={24} color="black" />
                        <Text
                            style={{
                                fontSize:10,
                                fontFamily:"Inter-Regular",
                                marginTop:2
                            }}>Fotografia</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={handleClick1} style={ [{ backgroundColor: isActive1 ? "#FCE8DD" : 'white', borderColor: isActive1 ? "coral" : 'black' }, styles.iconscont ]}>
                        <Entypo name="brush" size={24} color="black" />
                        <Text
                            style={{
                                fontSize:10,
                                fontFamily:"Inter-Regular",
                                marginTop:2
                            }}>Arte</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={handleClick2} style={ [{ backgroundColor: isActive2 ? "#FCE8DD" : 'white', borderColor: isActive2 ? "coral" : 'black' }, styles.iconscont ]}>
                        <Foundation name="mountains" size={24} color="black" />
                        <Text
                            style={{
                                fontSize:10,
                                fontFamily:"Inter-Regular",
                                marginTop:2
                            }}>Natureza</Text>
                    </TouchableOpacity>
                </View>

            </View>

                <View style={styles.header}>
                    <Text
                        style={{
                            fontSize:15,
                            fontFamily:"Inter-SemiBold",
                            marginBottom:10
                        }}>
                        Estadia</Text>
                </View>
                <View style={styles.dropdowsyle}>
                    <DropdownComponent3></DropdownComponent3>
                </View>


                <View>
                    <Text
                        style={{
                            marginStart:"5%",
                            fontSize:15,
                            fontFamily:"Inter-SemiBold",
                            marginBottom:10
                        }}>
                        Orçamento
                        </Text>
                    <Text
                        style={{
                            marginStart:"5%",
                            fontSize:13,
                            fontFamily:"Inter-Regular",
                            marginBottom:5,
                            marginTop:-10,
                            color:"#696969"
                        }}>
                        Por dia (em euros)
                    </Text>
                </View>
                <View style={styles.dropdowsyle}>
                    <DropdownComponent4></DropdownComponent4>
                </View>


                <View>
                    <Text
                        style={{
                            fontSize:15,
                            fontFamily:"Inter-SemiBold",
                            marginBottom:10,
                            marginStart:"5%"
                        }}>
                        Restrições</Text>
                </View>
                <View style={styles.dropdowsyle}>
                    <DropdownComponent5></DropdownComponent5>
                </View>





                <TouchableWithoutFeedback onPress={()=> navigation.navigate("Confirmar Viagem")}><View style={[styles.butonis,{marginTop:'5%',marginBottom:"8%"}]}><Text style={{marginLeft:12, marginVertical:5,alignSelf:"center", fontFamily:"Inter-SemiBold", fontSize:16, color:'white'}}>Enviar Pedido</Text></View></TouchableWithoutFeedback>

            </ScrollView>
        </SafeAreaView>
            )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",

    },
    topView:{
        marginTop:"15%",
        marginStart:"5%",
        marginEnd:"5%",
        flexDirection:"row",
        justifyContent:"space-between",
    },
    header:{
        marginTop:'9%',
        marginStart:'5%',
    },
    dropdowsyle:{
        marginTop:-6,

    },
    dropdata:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:"5%"
    },
    iconss:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginEnd:"5%",
    },
    iconscont:{
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1,
        borderRadius:3,
        width:70,
        paddingTop:8,
        paddingBottom:4,
        marginBottom:15,
    },
    iconscont1:{
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1,
        borderRadius:3,
        width:70,
        paddingTop:8,
        paddingBottom:4,
        marginBottom:15,
        borderColor:'coral',
        backgroundColor:"#FCE8DD"
    },
    butonis:{
        borderRadius:4,
        backgroundColor:'coral',
        marginEnd:'5%',
        marginStart:'5%',
        paddingTop:10,
        paddingBottom:10,
    }

})

export default PedirViagem;