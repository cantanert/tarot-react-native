import React from "react";
import {View, Text, Image, StyleSheet, Dimensions} from "react-native";
import Title from "../components/Title";

const viewportHeight = Dimensions.get("screen").height;
const imageHeight= viewportHeight / 2;

export default class CardDetails extends React.Component {
    render() {
        const CardData = this.props.navigation.getParam("item");
        return (
            <View style={styles.Wrapper}>
                <Title text={CardData.name}/>
                <Image source={CardData.image} style={styles.Banner}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Wrapper: {
        alignItems: "center"
    },
    Banner: {
        width: "70%",
        height: imageHeight,
        resizeMode: "contain",
        marginTop: 20
    }
});