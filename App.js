import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TarotReadings from "./src/pages/TarotReadings";
import TarotCardCategories from "./src/pages/TarotCardCategories";
import MajorArcanaCards from "./src/pages/MajorArcanaCards";

export default function App() {
    console.log("App Component is working now!");
    return (
        <View style={appContainer}>
            <TarotReadings/>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        paddingLeft: 10,
        paddingRight: 10
    }
});

const {appContainer} = styles;
