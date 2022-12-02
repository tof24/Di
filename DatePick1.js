import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View, Button, Platform, TouchableWithoutFeedback, TouchableOpacity} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons';

const DatePick1= () =>{

    const [date,setDate] = useState(new Date());
    const [mode,setMode] = useState('time');
    const [show,setShow] = useState(false);
    const [text,setText] = useState(' Inserir data ');


    const onChange = (event, selectedDate) =>{

        console.log("geio")

        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);


        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        setText(fDate);
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
        console.log("show", show);

        setText('10/12/22');

    }

    const onChangee = (event, selectedDate) =>{
        console.log("event", event);
        console.log("selectedDate", selectedDate);
    }


    return(
        <View>
            <TouchableOpacity title={"oioo"} style={styles.dataa} onPress={()=> showMode('date')}>
                <Text>{text}</Text>
                <AntDesign style={{paddingEnd:10, alignSelf:"center"}} name="down" size={10} color="gray" />
            </TouchableOpacity>
            {show && (<DateTimePicker
                testID='DateTimePicker'
                value={date}
                mode={mode}
                is24Hour={true}
                display='default'
                onChange={onChangee()}
            ></DateTimePicker>)}
        </View>
    )


}
const styles=StyleSheet.create({
    dataa:{
        borderWidth:1,
        borderRadius:3,
        paddingStart:15,
        paddingVertical:10,
        alignItems:"flex-start",
        flexDirection:"row",
        justifyContent:"space-between"
    }

})

export default DatePick1;