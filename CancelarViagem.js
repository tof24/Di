import React, {useCallback, useEffect, createContext} from "react";
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {Entypo, FontAwesome5, Foundation, Ionicons, MaterialIcons} from "@expo/vector-icons";

const CancelarViagem= ()=>{

    const Name = createContext();

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
        <SafeAreaView style={styles.container} >
            <View style={[styles.container, styles.caixa]}>
                <View style={{flexDirection:"row"}}>
                    <Text
                        style={{
                            textAlign:"center",
                            fontFamily:"Inter-Regular",
                            fontSize:15,
                            marginBottom:15,
                            marginTop:1
                        }}
                    >Destino </Text>
                    <Text
                        style={{
                            textAlign:"center",
                            fontFamily:"Inter-SemiBold",
                            fontSize:17,
                            marginBottom:15
                        }}
                    >Roma, Itália</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Text
                        style={{
                            textAlign:"center",
                            fontFamily:"Inter-Regular",
                            fontSize:15,
                            marginBottom:15,
                            marginTop:1
                        }}
                    >Budget </Text>
                    <MaterialIcons name="attach-money" size={22} color="black" />
                    <MaterialIcons name="attach-money" size={22} color="black" />
                </View>
                <View style={{flexDirection:"row"}}>
                    <Text
                        style={{
                            textAlign:"center",
                            fontFamily:"Inter-Regular",
                            fontSize:15,
                            marginBottom:15,
                            marginTop:3
                        }}
                    >Partida </Text>
                    <Text
                        style={{
                            textAlign:"center",
                            fontFamily:"Inter-SemiBold",
                            fontSize:18,
                            marginBottom:15
                        }}


                    >12/02/22</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Text
                        style={{
                            textAlign:"center",
                            fontFamily:"Inter-Regular",
                            fontSize:15,
                            marginBottom:15,
                            marginTop:3
                        }}
                    >Regresso </Text>
                    <Text
                        style={{
                            textAlign:"center",
                            fontFamily:"Inter-SemiBold",
                            fontSize:18,
                            marginBottom:15
                        }}
                    >16/02/22</Text>
                </View>
                <View style={{flexDirection:"row"}}>
                    <Text
                        style={{
                            textAlign:"center",
                            fontFamily:"Inter-Regular",
                            fontSize:15,
                            marginBottom:15,
                            marginTop:3
                        }}
                    >Gostos </Text>
                </View>
                <View style={styles.iconss}>
                    <View style={styles.iconscont}>
                        <FontAwesome5 name="glass-martini-alt" size={24} color="black" />
                        <Text
                            style={{
                                fontSize:10,
                                fontFamily:"Inter-Regular",
                                marginTop:2
                            }}>Noite</Text>
                    </View>
                    <View style={styles.iconscont}>
                        <Foundation name="mountains" size={24} color="black" />
                        <Text
                            style={{
                                fontSize:10,
                                fontFamily:"Inter-Regular",
                                marginTop:2
                            }}>Natureza</Text>
                    </View>
                    <View style={styles.iconscont}>
                        <Entypo name="camera" size={24} color="black" />
                        <Text
                            style={{
                                fontSize:10,
                                fontFamily:"Inter-Regular",
                                marginTop:2
                            }}>Fotografia</Text>
                    </View>
                    <View style={styles.iconscont}>
                        <Ionicons name="restaurant" size={24} color="black" />
                        <Text
                            style={{
                                fontSize:10,
                                fontFamily:"Inter-Regular",
                                marginTop:2
                            }}>Gastronomia</Text>
                    </View>
                </View>


            </View>
            <View style={{justifyContent:"center", flexDirection:"row", marginBottom: 50}}>
                <TouchableOpacity
                    onPress={()=> navigation.navigate("Home2")}>
                    <View style={{backgroundColor:"coral", marginHorizontal:10, borderRadius:3,padding:15}}>
                        <Text
                            style={{
                                textAlign: 'center',
                                color:"white",
                                fontFamily:"Inter-SemiBold",
                                fontSize:15,
                                width:180,

                            }}
                        >Cancelar Viagem</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 3,
        backgroundColor: "#fff",
        textAlign: 'center',
    },
    caixa:{
        marginHorizontal:"10%",
    },
    iconss:{
        flexDirection:"row",
        justifyContent:"space-around",
        width:"100%",
        alignItems:"center",

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
})
export default CancelarViagem;