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
import {useNavigation} from "@react-navigation/native";




const HomeS2= ()=>{


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
                        fontSize:40,
                        color:"coral",
                        fontFamily:"Inter-SemiBold",
                    }}>
                    Olá!</Text>
                <Text
                    style={{
                        fontSize:15,
                        fontFamily:"Inter-SemiBold",
                        marginTop:5
                    }}>
                    Pronto para uma nova aventura?</Text>
                <Text
                    style={{
                        fontSize:15,
                        fontFamily:"Inter-Regular",
                    }}>
                    Encontra e desfruta da tua viagem de sonho à distância de um clique!</Text>
            </View>

            <View style={styles.header}>
                <Text style={{fontFamily:'Inter-SemiBold', fontSize:15,}}> Os teus pedidos de viagem pendentes</Text>
                <View style={[styles.butonis,{marginTop:'5%',}]}><Text style={{marginLeft:12, fontFamily:"Inter-SemiBold", fontSize:18, color:'coral'}}>Londres, Reino Unido</Text></View>
            </View>

            <View style={styles.header}>
                <Text
                    style={{
                        fontSize:15,
                        fontFamily:"Inter-SemiBold",
                        marginTop:5
                    }}>
                    Talvez tenhas interesses...</Text>
                <View style={styles.imagecontainer}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <View style={styles.imagem}><ImageBackground imageStyle={{ borderRadius: 8}} source={require("./assets/roma.png")} style={styles.imagemm} >

                            <Text style={{marginStart:'6%',color:'white',fontFamily:"Inter-SemiBold",}}>Roma, Itália</Text>
                            <View style={{flexDirection:'row', marginBottom:5, }}>
                                <MaterialCommunityIcons name="bell" size={15} color="white" style={{marginLeft: '6%'}}/>
                                <MaterialCommunityIcons name="bell" size={15} color="white" style={{marginLeft: 10}}/>
                                <MaterialCommunityIcons name="bell" size={15} color="white" style={{marginLeft: 10}}/>
                            </View>


                        </ImageBackground></View>


                        <View style={styles.imagem}><ImageBackground imageStyle={{ borderRadius: 8}} source={require("./assets/roma.png")} style={styles.imagemm} >

                            <Text style={{marginStart:'6%',color:'white',fontFamily:"Inter-SemiBold",}}>Roma, Itália</Text>
                            <View style={{flexDirection:'row', marginBottom:5, }}>
                                <MaterialCommunityIcons name="bell" size={15} color="white" style={{marginLeft: '6%'}}/>
                                <MaterialCommunityIcons name="bell" size={15} color="white" style={{marginLeft: 10}}/>
                                <MaterialCommunityIcons name="bell" size={15} color="white" style={{marginLeft: 10}}/>
                            </View>


                        </ImageBackground></View>


                        <View style={styles.imagem}><ImageBackground imageStyle={{ borderRadius: 8}} source={require("./assets/roma.png")} style={styles.imagemm} >

                            <Text style={{marginStart:'6%',color:'white',fontFamily:"Inter-SemiBold",}}>Roma, Itália</Text>
                            <View style={{flexDirection:'row', marginBottom:5, }}>
                                <MaterialCommunityIcons name="bell" size={15} color="white" style={{marginLeft: '6%'}}/>
                                <MaterialCommunityIcons name="bell" size={15} color="white" style={{marginLeft: 10}}/>
                                <MaterialCommunityIcons name="bell" size={15} color="white" style={{marginLeft: 10}}/>
                            </View>


                        </ImageBackground></View>



                        <View style={styles.imagem}><ImageBackground imageStyle={{ borderRadius: 8}} source={require("./assets/roma.png")} style={styles.imagemm} >

                            <Text style={{marginStart:'6%',color:'white',fontFamily:"Inter-SemiBold",}}>Roma, Itália</Text>
                            <View style={{flexDirection:'row', marginBottom:5, }}>
                                <MaterialCommunityIcons name="bell" size={15} color="white" style={{marginLeft: '6%'}}/>
                                <MaterialCommunityIcons name="bell" size={15} color="white" style={{marginLeft: 10}}/>
                                <MaterialCommunityIcons name="bell" size={15} color="white" style={{marginLeft: 10}}/>
                            </View>


                        </ImageBackground></View>


                        <View style={styles.imagem}><ImageBackground imageStyle={{ borderRadius: 8}} source={require("./assets/roma.png")} style={styles.imagemm} >

                            <Text style={{marginStart:'6%',color:'white',fontFamily:"Inter-SemiBold",}}>Roma, Itália</Text>
                            <View style={{flexDirection:'row', marginBottom:5, }}>
                                <MaterialCommunityIcons name="bell" size={15} color="white" style={{marginLeft: '6%'}}/>
                                <MaterialCommunityIcons name="bell" size={15} color="white" style={{marginLeft: 10}}/>
                                <MaterialCommunityIcons name="bell" size={15} color="white" style={{marginLeft: 10}}/>
                            </View>


                        </ImageBackground></View>
                    </ScrollView>
                </View>
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
    imagem:{
        backgroundColor:"#dff",
        height:130,
        width:170,
        borderRadius:8,
        marginStart:6,
        marginEnd:6,


    },
    imagemm:{
        resizeMode: "cover",
        width:null,
        height:null,
        flex:1,
        justifyContent:'flex-end',



    },
    imagecontainer:{
        marginTop:10,
    },
    butonis:{
        borderWidth:1,
        borderRadius:4,
        borderColor:'coral',
        marginEnd:'5%',
        paddingTop:10,
        paddingBottom:10,
    }

})

export default HomeS2;