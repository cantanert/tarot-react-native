import React from 'react';
import {Text, StyleSheet, View, FlatList, TouchableOpacity, ImageBackground, SafeAreaView} from 'react-native';
import statics from "../statics/enumStatics";

const unsplashRootUrl = "https://images.unsplash.com/photo-";
const unsplashImageParameters = "?auto=format&fit=crop&w=375&q=80";

const tarotReadings = [
    {key: "What is 'Tarot', anyway?", image: "1565492206137-0797f1ca6dc6"},
    {key: "Why are some cards in suits, while others aren't?", image: "1565492206132-b48aa1ca7ac0"},
    {key: "What's in the 'Major Arcana' ?", image: "1515363524368-589ca770e0a1"},
    {key: "What's in the 'Minor Arcana' ?", image: "1565492206137-0797f1ca6dc6"},
    {key: "A three-card spread how-to?", image: "1565492206132-b48aa1ca7ac0"},
];

class TarotReadings extends React.Component {
    render() {
        return (
            <SafeAreaView style={{paddingBottom: 10}}>
                <Text style={styles.headerText}>{statics.tarotReadings}</Text>
                <FlatList
                    data={tarotReadings}
                    renderItem={this.itemRenderer}
                />
            </SafeAreaView>
        );
    }

    itemRenderer = ({item}) => {
        return (
            <TouchableOpacity>
                <ImageBackground
                    source={{uri: unsplashRootUrl + item.image + unsplashImageParameters}}  /*TODO dynamic with BE, get images from response*/
                    imageStyle={styles.imageBackgroundImageStyles}
                    style={styles.imageBackgroundWrapper}>
                    <Text style={styles.itemText}>{item.key}</Text>
                    <View style={styles.itemTextBadge}/>
                </ImageBackground>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    imageBackgroundImageStyles: {
        resizeMode: "cover",
        borderRadius: 10
    },
    imageBackgroundWrapper: {
        width: "100%",
        marginBottom: 20,
        height: 200,
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
    headerText: {
        fontSize: 25,
        fontWeight: "bold",
        paddingBottom: 10
    }
});

export default TarotReadings;