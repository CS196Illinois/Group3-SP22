// import React, { Component } from "react";
// import { StyleSheet, View } from "react-native";
// import MapboxGL from "@rnmapbox/maps";

// MapboxGL.setAccessToken("pk.eyJ1Ijoid2VsYnltIiwiYSI6ImNrOHhmZ2cyZzBqanEzbXJ6b3BpaHhicHIifQ.5osNmEEJ_7PkwM5ADpkayg");

// const styles = StyleSheet.create({
//     page: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#F5FCFF"
//     },
//     container: {
//         height: 300,
//         width: 300,
//         backgroundColor: "tomato"
//     },
//     map: {
//         flex: 1
//     }
// });

// export default class Map extends Component {
//     componentDidMount() {
//         MapboxGL.setTelemetryEnabled(false);
//     }

//     render() {
//         return (
//             <View style={styles.page}>
//                 <View style={styles.container}>
//                     <MapboxGL.MapView style={styles.map} />
//                 </View>
//             </View>
//         );
//     }
// }