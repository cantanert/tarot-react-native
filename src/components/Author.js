import React from "react";
import {View, Image, Text, StyleSheet} from "react-native";
import statics from "../statics/enumStatics";

//parsed image url parts
const unsplashRootUrl = statics.unsplashRootUrl;
const unsplashImageParameters = statics.unsplashImageParameters;

const Author = () => {
    return (
        <View style={styles.componentWrapper}>
            <Image source={{uri: unsplashRootUrl + "1472099645785-5658abf4ff4e" + unsplashImageParameters}}
                   style={styles.image}/>
            <View styles={styles.infoWrapper}>
                <Text style={styles.header}>Author</Text>
                <Text style={styles.text}>Lorem Ipsum</Text>
            </View>
        </View>
    );
};

export default Author;

const styles = StyleSheet.create({
    componentWrapper: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        backgroundColor: statics.colors.Blackboard,
    },
    infoWrapper: {
        flexDirection: "column",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        position: "relative",
        borderWidth: 4,
        borderColor: statics.colors.Grain
    },
    header:{
        color: "white",
        fontSize: 20,
        fontWeight: "900",
        paddingLeft: 10
    },
    text:{
        color: "white",
        fontSize: 25,
        fontWeight: "100",
        paddingLeft: 10
    }
});