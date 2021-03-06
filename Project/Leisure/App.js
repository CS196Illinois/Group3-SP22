import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import Home from './screens/Home'
import Preferences from './screens/Preferences'
import Places from './screens/Places'
import Map from './screens/Map'

function HomeScreen({ navigation }) {
  return (
    <Home></Home>
  );
}

function AccountScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Account Screen!</Text>
      // All React Components go here (Buttons for Name, etc + Image)
    </View>
  );
}

function PlacesAPI({ navigation }) {
  return (
    <Places></Places>
  )
}

function MapScreen({ navigation }) {
  return (
    <Map></Map>
  )
}

function HistoryScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>History Screen!</Text>
      // Don't implement yet
    </View>
  );
}

function PreferencesScreen({ navigation }) {
  return (
    <Preferences></Preferences>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Preferences" component={PreferencesScreen} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Account" component={AccountScreen} />
        <Drawer.Screen name="History" component={HistoryScreen} />
        <Drawer.Screen name="Places" component={PlacesAPI} />
        <Drawer.Screen name="Map" component={MapScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}