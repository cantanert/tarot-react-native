import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TarotReadings from "./src/pages/TarotReadings";
import TarotCardCategories from "./src/pages/TarotCardCategories";
import MajorArcanaCards from "./src/pages/MajorArcanaCards";
import Homepage from "./src/pages/Homepage";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import MinorArcanaCards from "./src/pages/MinorArcanaCards";

export default function App() {
    console.log("App Component is working now!");
    return (
        <View style={appWrapper}>
            <AppContainer/>
        </View>
    );
}

const RootStack = createStackNavigator(
    {
        Home: Homepage,
        TarotCardCategoriesRoute: TarotCardCategories,
        MajorArcanaCardsRoute: MajorArcanaCards,
        MinorArcanaCardsRoute: MinorArcanaCards,
        TarotReadings: TarotReadings,
    },
    {
        initialRouteName: "Home"
    }
);

const AppContainer = createAppContainer(RootStack);


const styles = StyleSheet.create({
    appWrapper: {
        flex: 1,
    }
});

const {appWrapper} = styles;
