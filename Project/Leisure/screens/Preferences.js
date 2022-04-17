import React, {useCallback, useState} from 'react';
import { Text, StyleSheet, Dimensions } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


function Preferences () {
    const [rOpen, setROpen] = useState(false);
    const [mOpen, setMOpen] = useState(false);
    const [tOpen, setTOpen] = useState(false);
    const [pOpen, setPOpen] = useState(false);
    const [rValue, setRValue] = useState(null);
    const [mValue, setMValue] = useState(null);
    const [tValue, setTValue] = useState(null);
    const [pValue, setPValue] = useState(null);
    const onRadiusOpen = useCallback(() => {
        setMOpen(false);
        setTOpen(false);
        setPOpen(false);
      }, []);    
    const onMoneyOpen = useCallback(() => {
        setROpen(false);
        setTOpen(false);
        setPOpen(false);
    }, []);
    const onTimeOpen = useCallback(() => {
        setROpen(false);
        setMOpen(false);
        setPOpen(false);
    }, []);
    const onPeopleOpen = useCallback(() => {
        setMOpen(false);
        setROpen(false);
        setTOpen(false);
    }, []);
    const [radius, setRadius] = useState([
        { label: '0 miles', value: 0 },
        { label: '5 miles', value: 5 },
        { label: '10 miles', value: 10 },
        { label: '15 miles', value: 15 },
        { label: '20 miles', value: 20 }
    ]);
    const [money, setMoney] = useState([
        {label: '$10', value: 10},
        {label: '$20', value: 20},
        {label: '$30', value: 30},
        {label: '$40', value: 40},
        {label: '$50', value: 50},
        {label: '$60', value: 60}
    ]);
    const [time, setTime] = useState([
        {label: '30 mins', value: 0.5},
        {label: '1 hr', value: 1},
        {label: '1.5 hr', value: 1.5},
        {label: '2 hr', value: 2},
        {label: '2.5+ hr', value: 2.5}
    ]);
    const [people, setPeople] = useState([
        {label: '1 person', value: 1},
        {label: '2 ppl', value: 2},
        {label: '3 ppl', value: 3},
        {label: '4 ppl', value: 4},
        {label: '5+ ppl', value: 5}    
    ]);

    return (
        <>
        <DropDownPicker
        //radius
            zIndex={4000}
            zIndexInverse={1000}
            style={styles.dropdown}
            containerStyle={styles.container}
            textStyle={styles.text}
            labelStyle={styles.label}
            arrowIconStyle={styles.arrow}
            tickIconStyle={styles.check}
            placeholder="Select a radius: "
            open={rOpen}
            setOpen={setROpen}
            onOpen={onRadiusOpen}
            value={rValue}
            items={radius}
            setValue={setRValue}
            setItems={setRadius}
        />
        <span>
            <Text style={emptyStlyes.text}>Clear</Text>
        </span>
        <DropDownPicker
        //money
            zIndex={3000}
            zIndexInverse={2000}
            dropDownContainerStyle={styles.DropDownPicker}
            style={styles.dropdown}
            containerStyle={styles.container}
            textStyle={styles.text}
            labelStyle={styles.label}
            arrowIconStyle={styles.arrow}
            tickIconStyle={styles.check}
            placeholder="Choose your budget!"
            open={mOpen}
            setOpen={setMOpen}
            onOpen={onMoneyOpen}
            value={mValue}
            items={money}
            setValue={setMValue}
            setItems={setMoney}
        />
        <DropDownPicker
        //time
            zIndex={2000}
            zIndexInverse={3000}
            dropDownContainerStyle={styles.DropDownPicker}
            style={styles.dropdown}
            containerStyle={styles.container}
            textStyle={styles.text}
            labelStyle={styles.label}
            arrowIconStyle={styles.arrow}
            tickIconStyle={styles.check}
            placeholder="How Much Time?"
            open={tOpen}
            setOpen={setTOpen}
            onOpen={onTimeOpen}
            value={tValue}
            items={time}
            setValue={setTValue}
            setItems={setTime}
        />
        <DropDownPicker
        //people
            zIndex={1000}
            zIndexInverse={4000}
            dropDownContainerStyle={styles.DropDownPicker}
            style={styles.dropdown}
            containerStyle={styles.container}
            textStyle={styles.text}
            labelStyle={styles.label}
            arrowIconStyle={styles.arrow}
            tickIconStyle={styles.check}
            placeholder="How many people?"
            open={pOpen}
            setOpen={setPOpen}
            onOpen={onPeopleOpen}
            value={pValue}
            items={people}
            setValue={setPValue}
            setItems={setPeople}
        />
        </>
    );
}

const emptyStlyes = StyleSheet.create({
    text: {
        color: 'white'
    }
})

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
        padding: '16px'
    },
    label: {
        color: 'black'
    },
    arrow: {
        display: 'none'
    },
    check: {
        display: 'none'
    }
});

export default Preferences