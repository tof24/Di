import React, {useCallback, useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const ConfirmarViagem= ()=>{

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
                <Text
                    style={{
                        textAlign:"center",
                        fontFamily:"Inter-SemiBold",
                        fontSize:20,
                        marginBottom:15
                    }}
                >O TEU PEDIDO FOI ENTREGUE COM SUCESSO!</Text>
                <Text
                    style={{
                        textAlign: 'center',
                        color:"#303030",
                        fontFamily:"Inter-Regular",
                        fontSize:15,
                        marginBottom:90

                    }}
                >Regressa à página Inicial e consulta o teu pedido em Pedidos Pendentes</Text>


            </View>
            <View style={{justifyContent:"center", flexDirection:"row", marginBottom: 50}}>
                <TouchableOpacity
                    onPress={()=> navigation.navigate("Homeee")}>
                    <View style={{backgroundColor:"coral", marginHorizontal:10, borderRadius:3,padding:15}}>
                        <Text
                            style={{
                                textAlign: 'center',
                                color:"white",
                                fontFamily:"Inter-SemiBold",
                                fontSize:15,
                                width:180,

                            }}
                        >Sair</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 3,
        backgroundColor: "#fff",
        textAlign: 'center',
    },
    caixa:{
        marginHorizontal:"10%",
    }
})
export default ConfirmarViagem;