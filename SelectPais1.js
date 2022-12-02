import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
    { label: 'Aveiro', value: '1' },
    { label: 'Coimbra', value: '2' },
    { label: 'Lisboa', value: '3' },
    { label: 'Porto', value: '4' },
    { label: 'Algarve', value: '5' },
    { label: 'Guarda', value: '6' },
    { label: 'Santarém', value: '7' },
    { label: 'Leiria', value: '8' },
];

const SelectPais1 = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);


    return (
        <View style={styles.container}>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'coral' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Coimbra' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
            />
        </View>
    );
};

export default SelectPais1;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
    },
    dropdown: {
        height: 20,
        borderColor: 'black',
        borderBottomWidth: 1,
        margonHorizontal: 8,
        marginStart:3

    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
        color:"black",
        marginBottom:15,
        fontFamily:"Inter-SemiBold",
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    iconStyle:{
        marginBottom:15,
    }
});