import React, {useState} from 'react';
import { Button, Text, View, StyleSheet, Dimensions } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const Preferences = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);

    return (
        <DropDownPicker
            style={styles.dropdown}
            containerStyle={styles.container}
            textStyle={styles.text}
            labelStyle={styles.label}
            arrowIconStyle={styles.arrow}
            tickIconStyle={styles.check}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
        />
    );
}

const styles = StyleSheet.create({
    dropdown: {
        backgroundColor: "#e3e3e3",
        borderRadius: "5px"
    },
    container: {
        width: Math.floor(screenWidth/2) + "px",
        textAlign: 'center',
        position: 'relative',
        left: Math.floor(screenWidth/4) + "px",
        top: '15px',
        justifyContent: 'center'
    },
    text: {
        color: 'black',
        textAlign: 'center',
        padding: '10px'
    },
    label: {
        color: 'blue',
    },
    arrow: {
        display: 'none'
    },
    check: {
        display: 'none'
    }

});

export default Preferences