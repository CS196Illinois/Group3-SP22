// File for API Testing
import React, { useEffect, useState} from 'react'
import { View, Text, FlatList, SafeAreaView, StyleSheet, StatusBar, Button } from 'react-native'
import { block } from 'react-native-reanimated';


const Item = ({ title, address }) => {
    if (title != "") {
        return (
            <View style={styles.itit}>
                <Text style={styles.title}>{title != null ? title : "Unnamed Restaurant"}</Text>
                <Text style={styles.secondLine}>{address}</Text>
            </View>
        )
    }
}

const Places = () => {

    const getPlacesFromApi = async () => {
        return fetch('https://api.geoapify.com/v2/places?categories=catering,accommodation,entertainment&filter=circle:-88.20359644897958,40.109500653061225,10000&bias=proximity:-88.20359644897958,40.109500653061225&limit=20&apiKey=db38481fda5a4ccba3a53cd416be2c44')
            .then((response) => response.json())
            .then((json) => {
                // Return a JSON array of the places
                return json;
            })
            .catch((error) => {
                console.error(error);
            });
    };
    const [data, setData] = useState([]);

    useEffect(() => {
        getPlacesFromApi().then((places) => {
            setData(places.features)
        });
    }, []);

    // var info = [];
    // getMoviesFromApi().then((res) => {
    //     info = JSON.parse("[" + res.features + "]");
    // })

    const renderItem = ({ item }) => (
        <Item 
            title={item.properties.name} 
            address={item.properties.formatted} 
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.properties.place_id}
            />
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    itit: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
        textAlign: 'center'
    },
    secondLine: {
        fontSize: 15,
        display: 'block',
        textAlign: 'center'
    }
});

export default Places