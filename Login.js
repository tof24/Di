import React from "react";
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";
import { useEffect, useCallback } from 'react';
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const Login= ()=>{


    const navigation=useNavigation();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');




    return(
        <KeyboardAvoidingView
            style={styles.container}
        >
            <View style={{marginBottom:90}}>
                <Text
                    style={{
                        fontSize:35,
                        fontWeight:"bold"
                    }}
                >Passanger</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text
                    style={{
                        fontSize:13,
                        fontWeight:"bold"
                    }}
                >Email</Text>
                <TextInput
                    placeholder="Email"
                    autoCorrect={false}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.input}
                />
                <Text
                    style={{
                        fontSize:13,
                        fontWeight:"bold"
                    }}
                >Password</Text>
                <TextInput
                    placeholder="Password"
                    autoCorrect={false}
                    onChangeText={(text) => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={()=> navigation.navigate("Home")}
                    style={[styles.buttonText, styles.buttonOutlinelog]}
                >
                    <Text style={styles.textbranco}>Login</Text>
                </TouchableOpacity>

                <View style={{width:"100%", alignItems:"center"}}>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{color:"black", fontWeight:"normal" }}>Ainda não tem conta?</Text>
                        <TouchableOpacity onPress={()=> navigation.navigate("Home")}><Text style={{fontWeight:"bold", color:"coral"}}> Criar conta</Text></TouchableOpacity>
                    </View>
                </View>
            </View>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 3,
        backgroundColor:"#fff"
    },
    inputContainer: {
        width: '88%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 5,
        borderRadius: 4,
        borderWidth:1,
        borderColor:"black",
        marginVertical: 10,

    },

    buttonContainer: {
        width: '88%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,

    },

    button: {
        backgroundColor: 'coral',
        width: '100%',
        padding: 15,
        borderRadius: 4,
        alignItems: "center",
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: 'coral',
        borderWidth: 2,
    },

    buttonOutlinelog: {
        backgroundColor: 'coral',
        marginTop: 5,
        marginBottom: 8,



    },
    buttonText: {
        backgroundColor: 'coral',
        width: '100%',
        padding: 15,
        borderRadius: 4,
        alignItems: "center",
    },
    buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
    fotinha: {
        marginBottom: 80,
    },
    textbranco: {
        color: 'white',
        fontWeight: '500'
    },


});

export default Login;