// File for API Testing
import React, {useState} from 'react'
import {View, Text} from 'react-native'

const getMoviesFromApi = () => {
    return fetch('https://api.geoapify.com/v2/places?categories=commercial,catering,accommodation,entertainment&filter=circle:-88.20359644897958,40.109500653061225,10000&bias=proximity:-88.20359644897958,40.109500653061225&limit=20&apiKey=db38481fda5a4ccba3a53cd416be2c44')
        .then((response) => response.json())
        .then((json) => {
            alert(json.type)
            return json;
        })
        .catch((error) => {
            console.error(error);
        });
};

const Places = () => {

    const info = getMoviesFromApi()
    return (
        <View>
            <Text>HOLA</Text>
        </View>
    )

}

export default Places