import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Homepage from "./src/pages/Homepage";
import TarotCards from "./src/pages/TarotCards";
import Articles from "./src/pages/Articles";
import TarotReading from "./src/pages/TarotReading";
import MajorArcanaCards from "./src/pages/MajorArcanaCards";
import MinorArcanaCardTypes from "./src/pages/MinorArcanaCardTypes";
import MinorArcanaCards from "./src/pages/MinorArcanaCards";
import ArticleDetails from "./src/pages/ArticleDetails";
import CardDetails from "./src/pages/CardDetails";
import Camera from "./src/pages/Camera";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import LoginPage from "./src/pages/LoginPage";

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
        Login: {
            screen: LoginPage,
            navigationOptions: {
                header: null,
            }
        },
        Camera: Camera,
        TarotCards: TarotCards,
        MajorArcanaCards: MajorArcanaCards,
        MinorArcanaCardTypes: MinorArcanaCardTypes,
        MinorArcanaCards: MinorArcanaCards,
        Articles: Articles,
        TarotReading: TarotReading,
        ArticleDetails: ArticleDetails,
        CardDetails: CardDetails
    },
    {
        initialRouteName: "Login"
    }
);

const AppContainer = createAppContainer(RootStack);


const styles = StyleSheet.create({
    appWrapper: {
        flex: 1,
    }
});

const {appWrapper} = styles;
