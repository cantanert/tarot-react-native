import React from "react";
import {FlatList, TouchableOpacity, ImageBackground, View, Text, StyleSheet, SafeAreaView} from "react-native";
import statics from '../statics/enumStatics'

const unsplashRootUrl = statics.unsplashRootUrl;
const unsplashImageParameters = statics.unsplashImageParameters;

const tarotCardCategories = [
    {name: "Major Arcana", image: "1568821137008-6a947a8decfc"},
    {name: "Minor Arcana", image: "1556739442-4c892bcbe8ba"}
];

class TarotCardCategories extends React.Component {
    render() {
        return (
            <SafeAreaView style={{height: "100%"}}>
                <Text style={styles.headerText}>{statics.tarotCards}</Text>
                <FlatList data={tarotCardCategories} renderItem={this.itemRenderer} keyExtractor={(item) => item.name}
                          style={styles.flatList}/>
            </SafeAreaView>
        );
    }

    itemRenderer = ({item}) => {
        return (
            <TouchableOpacity style={styles.itemWrapper}>
                <ImageBackground
                    source={{uri: unsplashRootUrl + item.image + unsplashImageParameters}}
                    style={styles.imageBackgroundWrapper}
                    imageStyle={styles.imageBackgroundImageStyles}>
                    <Text style={styles.itemText}>{item.name}</Text>
                    <View style={styles.itemTextBadge}/>
                </ImageBackground>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    itemWrapper: {
        justifyContent: "center"
    },
    imageBackgroundImageStyles: {
        resizeMode: "cover",
        borderRadius: 10
    },
    imageBackgroundWrapper: {
        width: "100%",
        height: 200,
        marginBottom: 10
    },
    headerText: {
        fontSize: 25,
        fontWeight: "bold",
        paddingBottom: 10
    },
    itemText: {
        color: "white",
        width: "100%",
        fontSize: 20,
        zIndex: 1,
        paddingLeft: 10,
        paddingTop: 10
    },
    itemTextBadge: {
        backgroundColor: "black",
        opacity: 0.5,
        height: "100%",
        width: "100%",
        position: "absolute",
        borderRadius: 10
    },
});


export default TarotCardCategories;


