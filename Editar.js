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
    TouchableWithoutFeedback,
    TextInput
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from "expo-font";
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useCallback, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";
import DropdownComponent from "./DropdownComponent";
import SelectPais from "./SelectPais";
import SelectPais1 from "./SelectPais1";

const Editar= ()=>{

    const [text, onChangeText] = React.useState("email@email.com");
    const [password, onChangePassword] = React.useState("password");

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

            </View>
            <View style={styles.header}>
                <Text
                    style={{
                        fontSize:20,
                        fontFamily:"Inter-SemiBold",
                        marginTop:20
                    }}>
                    Email</Text>
            </View>

            <View style={[styles.containerSec,{marginTop:10,}]}>
                <TextInput
                    style={{
                        fontSize:14,
                        fontFamily:"Inter-SemiBold",
                        color:"black",
                    }}
                    onChangeText={onChangeText}
                    value={text}
                />
            </View>
            <View style={styles.header}>
                <Text
                    style={{
                        fontSize:20,
                        fontFamily:"Inter-SemiBold",
                    }}>
                    Password</Text>
            </View>

            <View style={[styles.containerSec,{marginTop:10,}]}>
                <TextInput
                    style={{
                        fontSize:14,
                        fontFamily:"Inter-SemiBold",
                        color:"black",
                    }}
                    onChangeText={onChangePassword}
                    value={password}
                    secureTextEntry={true}
                />
            </View>
            <View style={{marginStart:"5%", marginTop:35}}>
                <Text
                    style={{
                        fontSize:20,
                        fontFamily:"Inter-SemiBold",
                    }}>
                    País</Text>
            </View>
            <View>
                <SelectPais></SelectPais>
            </View>

            <View style={{marginStart:"5%", marginTop:30}}>
                <Text
                    style={{
                        fontSize:20,
                        fontFamily:"Inter-SemiBold",
                    }}>
                    Cidade</Text>
            </View>
            <View>
                <SelectPais1></SelectPais1>
            </View>

            <View>
                <TouchableWithoutFeedback onPress={()=> navigation.navigate("Perfil")}><View style={[styles.butonis,{marginTop:'5%',}]}><Text style={{marginLeft:12, marginVertical:5,alignSelf:"center", fontFamily:"Inter-SemiBold", fontSize:16, color:'white'}}>Guardar</Text></View></TouchableWithoutFeedback>
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
        borderBottomWidth:1,
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

export default Editar;