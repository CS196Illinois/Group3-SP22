import React from "react";
import {View,Text,StyleSheet, Dimensions, Image} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Preferences = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'}
    ]);

    return (
        <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        />
    );
}

export default Preferences