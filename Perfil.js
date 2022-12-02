import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    Image,
    TouchableWithoutFeedback
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from "expo-font";
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useCallback } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";

const Perfil= ()=>{

    const navigation=useNavigation();

    let [ fontsLoaded ] = useFonts({
        'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
        'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
        'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
        'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
        'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
    });

    useEffect(() => {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }


    return(
        <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
            <View style={styles.topView}>
                <Text
                    style={{
                        fontSize:25,
                        fontFamily:"Inter-SemiBold",
                    }}
                >Perfil</Text>

                <TouchableWithoutFeedback onPress={()=> navigation.navigate("Editar")}>
                    <Text
                        style={{
                            fontSize:17,
                            fontFamily:"Inter-SemiBold",
                            color:"coral",
                            marginTop:10
                        }}
                    >Editar</Text></TouchableWithoutFeedback>

            </View>
            <View style={styles.header}>
                <Text
                    style={{
                        fontSize:20,
                        fontFamily:"Inter-SemiBold",
                        marginTop:20
                    }}>
                    Dados Pessoais</Text>
            </View>

            <View style={[styles.containerSec,{marginTop:10,}]}>
                <View style={styles.box}>
                    <Text
                        style={{
                            fontSize:13,
                            fontFamily:"Inter-SemiBold",

                        }}>Email</Text>
                    <Text
                        style={{
                            fontSize:13,
                            fontFamily:"Inter-Regular",
                            color:"#767676"
                        }}>email@email.com</Text>
                </View>
            </View>
            <View style={styles.containerSec}>
                <View style={styles.box}>
                    <Text
                        style={{
                        fontSize:13,
                        fontFamily:"Inter-SemiBold",

                    }}>Localização</Text>
                    <Text
                        style={{
                            fontSize:13,
                            fontFamily:"Inter-Regular",
                            color:"#767676"
                        }}>Coimbra, Portugal</Text>
                </View>
            </View>

            <View style={styles.header}>
                <Text
                    style={{
                        fontSize:20,
                        fontFamily:"Inter-SemiBold",
                        marginTop:20
                    }}>
                    Definições</Text>
            </View>

            <View style={[styles.containerSec,{marginTop:10,}]}>
                <View style={styles.box}>
                    <Text
                        style={{
                            fontSize:13,
                            fontFamily:"Inter-SemiBold",

                        }}>Dark Mode</Text>
                    <FontAwesome name="toggle-on" size={20} color="black" />
                </View>
            </View>
            <View style={styles.containerSec}>
                <View style={styles.box}>
                    <Text
                        style={{
                            fontSize:13,
                            fontFamily:"Inter-SemiBold",

                        }}>Histórico</Text>
                    <AntDesign style={{ alignSelf:"center"}} name="down" size={14} color="#767676" />
                </View>
            </View>
            <View style={styles.containerSec}>
                <View style={styles.box}>
                    <Text
                        style={{
                            fontSize:13,
                            fontFamily:"Inter-SemiBold",

                        }}>Idioma</Text>
                    <AntDesign style={{ alignSelf:"center"}} name="down" size={14} color="#767676" />
                </View>
            </View>


            <View>
                <TouchableWithoutFeedback onPress={()=> navigation.navigate("Login")}><View style={[styles.butonis,{marginTop:'5%',}]}><Text style={{marginLeft:12, marginVertical:5,alignSelf:"center", fontFamily:"Inter-SemiBold", fontSize:16, color:'white'}}>Logout</Text></View></TouchableWithoutFeedback>
            </View>

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
    containerSec:{
        marginStart:'5%',
        marginEnd:'5%',
        marginTop:10,
        borderRadius:3,
        borderWidth:1,
    },
    box:{
        marginHorizontal:'5%',
        paddingVertical:15,
        flexDirection:'row',
        justifyContent:'space-between',
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

export default Perfil;