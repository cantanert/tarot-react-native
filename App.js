import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Articles from "./src/pages/Articles";
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
        TarotCards: TarotCardCategories,
        MajorArcanaCards: MajorArcanaCards,
        MinorArcanaCards: MinorArcanaCards,
        Articles: Articles,
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
