import React from 'react'
import {View,Text,StyleSheet, Dimensions, Image} from 'react-native'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Home = () => {
    return (
        <View style={styles.homeScreen}>
            <View style={styles.container}>
                <Image style={styles.innerImg} source={require('../assets/img/illini_union.jpeg')} />
                <Image style={styles.gradient} source={require('../assets/img/rectangle1.png')} />
                <View style={styles.frontTitle}>
                    <Text style={styles.topTxt}>Brunch at the Illini Union</Text>
                    <Text style={styles.secondaryTxt}>Sunday March 12 @ 12:30PM</Text>
                </View>
                <View style={styles.slideShowIndicator}>
                    o o o o
                </View>
            </View>
            <View style={styles.userTrips}>
                <View style={styles.titleArea}>
                    <Text style={styles.titleTxt}>Your Trips</Text>
                </View>
                <View style={styles.tripsList}>
                    <View style={styles.singleTrip}>
                        <Image style={styles.tripImg} source={require('../assets/img/illini_union.jpeg')} />
                        <View style={styles.meetInfo}>
                            <Text style={fontSizes.firstLargest}>Escape Room</Text>
                            <Text style={fontSizes.secondLargest}>Today @ 11:50AM</Text>
                            <Text style={fontSizes.secondLargest}>You, James, +10</Text>
                        </View>
                    </View>

                    <View style={styles.singleTrip}>
                        <Image style={styles.tripImg} source={require('../assets/img/illini_union.jpeg')} />
                        <View style={styles.meetInfo}>
                            <Text style={fontSizes.firstLargest}>Escape Room</Text>
                            <Text style={fontSizes.secondLargest}>Today @ 11:50AM</Text>
                            <Text style={fontSizes.secondLargest}>You, James, +10</Text>
                        </View>
                    </View>

                    <View style={styles.singleTrip}>
                        <Image style={styles.tripImg} source={require('../assets/img/illini_union.jpeg')} />
                        <View style={styles.meetInfo}>
                            <Text style={fontSizes.firstLargest}>Escape Room</Text>
                            <Text style={fontSizes.secondLargest}>Today @ 11:50AM</Text>
                            <Text style={fontSizes.secondLargest}>You, James, +10</Text>
                        </View>
                    </View>

                    <View style={styles.singleTrip}>
                        <Image style={styles.tripImg} source={require('../assets/img/illini_union.jpeg')} />
                        <View style={styles.meetInfo}>
                            <Text style={fontSizes.firstLargest}>Escape Room</Text>
                            <Text style={fontSizes.secondLargest}>Today @ 11:50AM</Text>
                            <Text style={fontSizes.secondLargest}>You, James, +10</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    homeScreen: {
        backgroundColor: 'white',
        minHeight: screenHeight
    },
    container: {
        width: screenWidth,
        height: 350,
        position: 'relative'
    },
    innerImg: {
        width: screenWidth,
        height: 350,
        zIndex: 1
    },
    gradient: {
        width: screenWidth,
        position: 'absolute',
        height: 350,
        bottom: 0,
        left: 0,
        opacity: 0.8,
        zIndex: 3
    },
    frontTitle: {
        width: screenWidth,
        position: 'absolute',
        height: 'auto',
        bottom: 30,
        left: 20,
        color: 'white',
        zIndex: 4
    },
    topTxt: {
        fontSize: '1.5em',
        color: 'white',
        fontWeight: 'bold'
    },
    secondaryTxt: {
        color: 'white',
        fontSize: '1em'
    },
    userTrips: {
        width: screenWidth,
        display: 'block'
    },
    titleArea: {
        width: Number(screenWidth-50),
        positon: 'relative',
        left: 25,
        paddingTop: 40,
        paddingBottom: 15
    },
    slideShowIndicator: {
        position: 'absolute',
        width: screenWidth,
        textAlign: 'center',
        bottom: 5,
        left: 0,
        zIndex: 4,
        color: 'white',
        fontFamily: 'Arial'
    },
    titleTxt: {
        fontSize: '1.5em',
        color: 'black',
        position: 'relative',
        left: 30,
        fontWeight: 'bold',
        flex: 1
    },
    tripsList: {
        width: Math.round(screenWidth*0.8),
        position: 'relative',
        left: 0.1*screenWidth,
        paddingTop: 20,
    },
    singleTrip: {
        width: Math.round(screenWidth*0.8),
        backgroundColor: '#F0F0F0',
        borderRadius: 5,
        display: 'block',
        marginBottom: 10
    },
    tripImg: {
        width: 70,
        height: 70,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        display: 'inline-block',
        float: 'left'
    },
    meetInfo: {
        paddingLeft: 10,
        position: 'relative',
        top: 5
    }
});

const fontSizes = StyleSheet.create({
    firstLargest: {
        fontSize: '1.1em',
        fontWeight: 'bold'
    },
    secondLargest: {
        fontSize: '0.9em',
    }
});

export default Home