import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Homepage from "./src/pages/Homepage";
import TarotCardCategories from "./src/pages/TarotCardCategories";
import Articles from "./src/pages/Articles";
import MajorArcanaCards from "./src/pages/MajorArcanaCards";
import MinorArcanaCards from "./src/pages/MinorArcanaCards";
import ArticleViewer from "./src/components/ArticleViewer";
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
        TarotCards: TarotCardCategories,
        MajorArcanaCards: MajorArcanaCards,
        MinorArcanaCards: MinorArcanaCards,
        Articles: Articles,
        ArticleViewer: ArticleViewer
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
