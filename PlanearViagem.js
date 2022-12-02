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
import { useFonts } from "expo-font";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useCallback } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";

const PlanearViagem= ()=>{

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
                >Passanger</Text>
                <MaterialCommunityIcons name="bell" size={27} color="black" style={{marginTop: 5}}/>
            </View>
            <View style={styles.header}>
                <Text
                    style={{
                        fontSize:20,
                        fontFamily:"Inter-SemiBold",
                        marginTop:20
                    }}>
                    Alguém para surpreender</Text>
            </View>

            <TouchableWithoutFeedback
                onPress={()=> navigation.navigate("Confirmar")}
            >
                <View style={styles.header}>
                    <View style={styles.contbox}>
                        <View style={styles.destinotext}>
                            <Text
                                style={{
                                    fontSize:14,
                                    fontFamily:"Inter-SemiBold",
                                }}>Roma</Text>
                            <Text
                                style={{
                                    fontSize:13,
                                    fontFamily:"Inter-Medium",
                                }}>Itália</Text>
                        </View>
                        <View style={styles.destinomoney}>
                            <FontAwesome5 style={{marginStart:7}} name="euro-sign" size={15} color="black" />
                            <FontAwesome5 style={{marginHorizontal:7}} name="euro-sign" size={15} color="black" />
                        </View>
                        <View style={styles.destinodata}>
                            <View style={styles.destinodatain}>
                                <FontAwesome5 name="plane-departure" size={15} color="black" />
                                <View style={{backgroundColor:"#FCE8DC", borderRadius:4, marginStart:5 }}><Text style={{
                                    fontSize:13,
                                    fontFamily:"Inter-Medium",
                                    marginHorizontal:6
                                }}>12/02/22</Text></View>
                            </View>
                            <View style={styles.destinodatain}>
                                <FontAwesome5 name="plane-arrival" size={15} color="black" />
                                <View style={{backgroundColor:"#FCE8DC", borderRadius:4, marginStart:5 }}><Text style={{
                                    fontSize:13,
                                    fontFamily:"Inter-Medium",
                                    marginHorizontal:6
                                }}>16/02/22</Text></View>
                            </View>
                        </View>
                        <View style={styles.destinolikes}>
                            <FontAwesome5 name="glass-martini-alt" size={17} color="black" />
                            <Foundation name="mountains" size={17} color="black" />
                            <Entypo name="camera" size={17} color="black" />
                            <Ionicons name="restaurant" size={17} color="black" />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                onPress={()=> navigation.navigate("Confirmar")}
            >
                <View style={styles.header}>
                    <View style={styles.contbox}>
                        <View style={styles.destinotext}>
                            <Text
                                style={{
                                    fontSize:14,
                                    fontFamily:"Inter-SemiBold",
                                }}>Milão</Text>
                            <Text
                                style={{
                                    fontSize:13,
                                    fontFamily:"Inter-Medium",
                                }}>Itália</Text>
                        </View>
                        <View style={styles.destinomoney}>
                            <FontAwesome5 style={{marginStart:7}} name="euro-sign" size={15} color="black" />
                            <FontAwesome5 style={{marginHorizontal:7}} name="euro-sign" size={15} color="black" />
                        </View>
                        <View style={styles.destinodata}>
                            <View style={styles.destinodatain}>
                                <FontAwesome5 name="plane-departure" size={15} color="black" />
                                <View style={{backgroundColor:"#FCE8DC", borderRadius:4, marginStart:5 }}><Text style={{
                                    fontSize:13,
                                    fontFamily:"Inter-Medium",
                                    marginHorizontal:6
                                }}>22/03/22</Text></View>
                            </View>
                            <View style={styles.destinodatain}>
                                <FontAwesome5 name="plane-arrival" size={15} color="black" />
                                <View style={{backgroundColor:"#FCE8DC", borderRadius:4, marginStart:5 }}><Text style={{
                                    fontSize:13,
                                    fontFamily:"Inter-Medium",
                                    marginHorizontal:6
                                }}>24/03/22</Text></View>
                            </View>
                        </View>
                        <View style={styles.destinolikes}>
                            <Entypo name="brush" size={17} color="black" />
                            <Foundation name="mountains" size={17} color="black" />
                            <Entypo name="game-controller" size={17} color="black" />
                            <FontAwesome5 name="glass-martini-alt" size={17} color="black" />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                onPress={()=> navigation.navigate("Confirmar")}
            >
                <View style={styles.header}>
                    <View style={styles.contbox}>
                        <View style={styles.destinotext}>
                            <Text
                                style={{
                                    fontSize:14,
                                    fontFamily:"Inter-SemiBold",
                                }}>Madrid</Text>
                            <Text
                                style={{
                                    fontSize:12,
                                    fontFamily:"Inter-Medium",
                                }}>Espanha</Text>
                        </View>
                        <View style={styles.destinomoney}>
                            <FontAwesome5 style={{marginStart:0}} name="euro-sign" size={15} color="black" />
                            <FontAwesome5 style={{marginHorizontal:7}} name="euro-sign" size={15} color="black" />
                        </View>
                        <View style={styles.destinodata}>
                            <View style={styles.destinodatain}>
                                <FontAwesome5 name="plane-departure" size={15} color="black" />
                                <View style={{backgroundColor:"#FCE8DC", borderRadius:4, marginStart:5 }}><Text style={{
                                    fontSize:13,
                                    fontFamily:"Inter-Medium",
                                    marginHorizontal:6
                                }}>06/06/22</Text></View>
                            </View>
                            <View style={styles.destinodatain}>
                                <FontAwesome5 name="plane-arrival" size={15} color="black" />
                                <View style={{backgroundColor:"#FCE8DC", borderRadius:4, marginStart:5 }}><Text style={{
                                    fontSize:13,
                                    fontFamily:"Inter-Medium",
                                    marginHorizontal:6
                                }}>08/06/22</Text></View>
                            </View>
                        </View>
                        <View style={styles.destinolikes}>
                            <Entypo name="game-controller" size={17} color="black" />
                            <Entypo name="camera" size={17} color="black" />
                            <Foundation name="mountains" size={17} color="black" />
                            <Entypo name="dribbble" size={17} color="black" />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                onPress={()=> navigation.navigate("Confirmar")}
            >
                <View style={styles.header}>
                    <View style={styles.contbox}>
                        <View style={styles.destinotext}>
                            <Text
                                style={{
                                    fontSize:15,
                                    fontFamily:"Inter-SemiBold",
                                }}>N.Y</Text>
                            <Text
                                style={{
                                    fontSize:13,
                                    fontFamily:"Inter-Medium",
                                }}>USA</Text>
                        </View>
                        <View style={styles.destinomoney}>
                            <FontAwesome5 style={{marginStart:21}} name="euro-sign" size={15} color="black" />
                            <FontAwesome5 style={{marginHorizontal:7}} name="euro-sign" size={15} color="black" />
                        </View>
                        <View style={styles.destinodata}>
                            <View style={styles.destinodatain}>
                                <FontAwesome5 name="plane-departure" size={15} color="black" />
                                <View style={{backgroundColor:"#FCE8DC", borderRadius:4, marginStart:5 }}><Text style={{
                                    fontSize:13,
                                    fontFamily:"Inter-Medium",
                                    marginHorizontal:6
                                }}>05/05/22</Text></View>
                            </View>
                            <View style={styles.destinodatain}>
                                <FontAwesome5 name="plane-arrival" size={15} color="black" />
                                <View style={{backgroundColor:"#FCE8DC", borderRadius:4, marginStart:5 }}><Text style={{
                                    fontSize:13,
                                    fontFamily:"Inter-Medium",
                                    marginHorizontal:6
                                }}>12/05/22</Text></View>
                            </View>
                        </View>
                        <View style={styles.destinolikes}>
                            <FontAwesome5 name="glass-martini-alt" size={17} color="black" />
                            <Entypo name="feather" size={17} color="black" />
                            <Entypo name="brush" size={17} color="black" />
                            <Ionicons name="restaurant" size={17} color="black" />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                onPress={()=> navigation.navigate("Confirmar")}
            >
                <View style={styles.header}>
                    <View style={styles.contbox}>
                        <View style={styles.destinotext}>
                            <Text
                                style={{
                                    fontSize:15,
                                    fontFamily:"Inter-SemiBold",
                                }}>Porto</Text>
                            <Text
                                style={{
                                    fontSize:13,
                                    fontFamily:"Inter-Medium",
                                }}>Portugal</Text>
                        </View>
                        <View style={styles.destinomoney}>
                            <FontAwesome5 style={{marginStart:2}} name="euro-sign" size={15} color="black" />
                            <FontAwesome5 style={{marginHorizontal:7}} name="euro-sign" size={15} color="black" />
                        </View>
                        <View style={styles.destinodata}>
                            <View style={styles.destinodatain}>
                                <FontAwesome5 name="plane-departure" size={15} color="black" />
                                <View style={{backgroundColor:"#FCE8DC", borderRadius:4, marginStart:5 }}><Text style={{
                                    fontSize:13,
                                    fontFamily:"Inter-Medium",
                                    marginHorizontal:6
                                }}>11/10/22</Text></View>
                            </View>
                            <View style={styles.destinodatain}>
                                <FontAwesome5 name="plane-arrival" size={15} color="black" />
                                <View style={{backgroundColor:"#FCE8DC", borderRadius:4, marginStart:5 }}><Text style={{
                                    fontSize:13,
                                    fontFamily:"Inter-Medium",
                                    marginHorizontal:6
                                }}>13/10/22</Text></View>
                            </View>
                        </View>
                        <View style={styles.destinolikes}>
                            <FontAwesome5 name="glass-martini-alt" size={17} color="black" />
                            <Foundation name="mountains" size={17} color="black" />
                            <Entypo name="dribbble" size={17} color="black" />
                            <Entypo name="feather" size={17} color="black" />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
                onPress={()=> navigation.navigate("Confirmar")}
            >
                <View style={styles.header}>
                    <View style={styles.contbox}>
                        <View style={styles.destinotext}>
                            <Text
                                style={{
                                    fontSize:15,
                                    fontFamily:"Inter-SemiBold",
                                }}>Roma</Text>
                            <Text
                                style={{
                                    fontSize:13,
                                    fontFamily:"Inter-Medium",
                                }}>Itália</Text>
                        </View>
                        <View style={styles.destinomoney}>
                            <FontAwesome5 style={{marginStart:7}} name="euro-sign" size={15} color="black" />
                            <FontAwesome5 style={{marginHorizontal:7}} name="euro-sign" size={15} color="black" />
                        </View>
                        <View style={styles.destinodata}>
                            <View style={styles.destinodatain}>
                                <FontAwesome5 name="plane-departure" size={15} color="black" />
                                <View style={{backgroundColor:"#FCE8DC", borderRadius:4, marginStart:5 }}><Text style={{
                                    fontSize:13,
                                    fontFamily:"Inter-Medium",
                                    marginHorizontal:6
                                }}>12/02/22</Text></View>
                            </View>
                            <View style={styles.destinodatain}>
                                <FontAwesome5 name="plane-arrival" size={15} color="black" />
                                <View style={{backgroundColor:"#FCE8DC", borderRadius:4, marginStart:5 }}><Text style={{
                                    fontSize:13,
                                    fontFamily:"Inter-Medium",
                                    marginHorizontal:6
                                }}>12/02/22</Text></View>
                            </View>
                        </View>
                        <View style={styles.destinolikes}>
                            <FontAwesome5 name="glass-martini-alt" size={17} color="black" />
                            <Entypo name="feather" size={17} color="black" />
                            <Entypo name="brush" size={17} color="black" />
                            <Ionicons name="restaurant" size={17} color="black" />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
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
        marginTop:'5%',
        marginStart:'5%',
    },
    contbox:{
        borderWidth:1,
        backgroundColor:'#fff',
        borderColor:'coral',
        borderRadius:4,
        marginEnd:'5%',
        paddingStart:30,
        paddingVertical:20,
        flexDirection:"row",
    },
    destinotext:{
        marginStart:-7
    },
    destinomoney:{
        marginStart:10,
        flexDirection:'row',
        alignItems:"center"
    },
    destinodata:{
        marginStart:10,
        alignItems:"center"

    },
    destinodatain:{
        flexDirection:"row",
        alignItems:"center",
        marginVertical:2,

    },
    destinolikes:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"#FCE8DC",
        width:105,
        marginStart:10,
        paddingHorizontal:10,
        borderRadius:4,
        justifyContent:"space-between",

    },

})

export default PlanearViagem;