import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Homescreen from "./Homescreen";
import Perfil from "./Perfil";
import PedirViagem from "./PedirViagem";
import PlanearViagem from "./PlanearViagem";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ConfirmarPlano from "./ConfirmarPlano"
import ConfirmarViagem from "./ConfirmarViagem";
import Editar from "./Editar";
import Login from "./Login";
import CancelarViagem from "./CancelarViagem";
import HomeS2 from "./HomeS2";

const PageStackNavigator= createNativeStackNavigator();

function MyStack(){
    return(
        <PageStackNavigator.Navigator
        initalRouteName="PlanearViagem">
            <PageStackNavigator.Screen name="planearViagem" component={PlanearViagem} options={{headerShown:false}}></PageStackNavigator.Screen>
            <PageStackNavigator.Screen name="Confirmar" component={ConfirmarPlano}></PageStackNavigator.Screen>
        </PageStackNavigator.Navigator>
    )
}

function MyStackv(){
    return(
        <PageStackNavigator.Navigator
            initalRouteName="PedirViagem">
            <PageStackNavigator.Screen name="PedirViagem" component={PedirViagem} options={{headerShown:false}}></PageStackNavigator.Screen>
            <PageStackNavigator.Screen name="Confirmar Viagem" component={ConfirmarViagem}></PageStackNavigator.Screen>
        </PageStackNavigator.Navigator>
    )
}

function MyStackp(){
    return(
        <PageStackNavigator.Navigator
            initalRouteName="Perfil">
            <PageStackNavigator.Screen name="Perfil" component={Perfil} options={{headerShown:false}}></PageStackNavigator.Screen>
            <PageStackNavigator.Screen name="Editar" component={Editar}></PageStackNavigator.Screen>
        </PageStackNavigator.Navigator>
    )
}

function MyStackh(){
    return(
        <PageStackNavigator.Navigator
            initalRouteName="Home">
            <PageStackNavigator.Screen name="Home" component={Homescreen} options={{headerShown:false}}></PageStackNavigator.Screen>
            <PageStackNavigator.Screen name="Cancelar Viagem" component={CancelarViagem}></PageStackNavigator.Screen>
        </PageStackNavigator.Navigator>
    )
}


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Home2 = createNativeStackNavigator();

function MyTabs(){
    return(
        <Tab.Navigator

            initialRoutename="Home"
            screenOptions={{
                tabBarActiveTintColor: 'coral',
                tabBarStyle: {
                    height:60
                },
                tabBarLabelPosition:"bellow-icon"

            }}



        >
            <Tab.Screen
                name="Homeee"
                component={MyStackh}
                options={{
                    tabBarLabel:'Home',
                    tabBarIcon:({color, size})=>(<AntDesign name="home" size={24} color={color} />),
                    headerShown:false,
                }}></Tab.Screen>
            <Tab.Screen name="Pedir Viagem" component={MyStackv}
                        options={{
                            tabBarLabel:'Viajar',
                            tabBarIcon:({color, size})=>(<FontAwesome name="plane" size={24} color={color}/>),
                            headerShown:false,
                        }}
            ></Tab.Screen>
            <Tab.Screen  name="Planear Viagem"
                         component={MyStack}
                         options={{
                             tabBarLabel:'Planear',
                             tabBarIcon:({color, size})=>(<FontAwesome5 name="book-open" size={24} color={color}/>),
                             headerShown:false,
                         }}></Tab.Screen>
            <Tab.Screen name="Perfilll" component={MyStackp}
                        options={{
                            tabBarLabel:'Perfill',
                            tabBarIcon:({color, size})=>(<FontAwesome name="user" size={24} color={color}/>),
                            headerShown:false,
                        }}
            ></Tab.Screen>
        </Tab.Navigator>
    )

}

export default function Navigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name={"Login"} component={Login} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name={"Home2"} component={HomeS2} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name={"Home"} component={MyTabs} options={{ headerShown: false }}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}