import React from "react";
import {View,Text,StyleSheet, Dimensions, Image} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Preferences = () => {
    return (
        <DropDownPicker
            items={[
                {label: 'Item 1', value: 'item1'},
                {label: 'Item 2', value: 'item2'},
            ]}
            defaultIndex={0}
            containerStyle={{height: 100, width: 100}}
            onChangeItem={item => console.log(item.label, item.value)}
        />
    )
}

export default Preferences