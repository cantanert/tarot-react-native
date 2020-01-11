import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Homepage from "./src/pages/Homepage";
import TarotCards from "./src/pages/TarotCards";
import Articles from "./src/pages/Articles";
import MajorArcanaCards from "./src/pages/MajorArcanaCards";
import MinorArcanaCards from "./src/pages/MinorArcanaCards";
import ArticleDetails from "./src/pages/ArticleDetails";
import Minor from "./src/pages/Minor";
import CardDetails from "./src/pages/CardDetails";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

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
        TarotCards: TarotCards,
        MajorArcanaCards: MajorArcanaCards,
        MinorArcanaCards: MinorArcanaCards,
        Articles: Articles,
        ArticleDetails: ArticleDetails,
        Minor: Minor,
        CardDetails: CardDetails
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
