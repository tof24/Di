import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const data = [
    { label: 'Alemanha', value: '1' },
    { label: 'Brasil', value: '2' },
    { label: 'Canadá', value: '3' },
    { label: 'Dinamarca', value: '4' },
    { label: 'Espanha', value: '5' },
    { label: 'Grécia', value: '6' },
    { label: 'Portugal', value: '7' },
    { label: 'Qatar', value: '8' },
];

const SelectPais = () => {
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
                placeholder={!isFocus ? 'Portugal' : '...'}
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

export default SelectPais;

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