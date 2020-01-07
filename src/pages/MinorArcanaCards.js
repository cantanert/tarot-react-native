import React from 'react';
import {Dimensions, Text, TouchableOpacity, FlatList, ImageBackground, StyleSheet, View, SafeAreaView} from 'react-native'
import mockedMajorArcanaData from "../statics/mockedMajorArcanaData";
import statics from "../statics/enumStatics";

const numColumns = 3;
const tileWidth = Dimensions.get("window").width / numColumns;


export default class MinorArcanaCards extends React.Component {
    render() {
        return (
            <SafeAreaView>
                <FlatList
                    data={mockedMajorArcanaData.sampleData}
                    renderItem={this.itemRenderer}
                    keyExtractor={(item) => item.name}
                    numColumns={3}
                />
            </SafeAreaView>
        );
    }

    itemRenderer = ({item}) => {
        return (
            <TouchableOpacity style={styles.touchableArea}>
                <ImageBackground
                    source={{uri: item.image}}
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
    imageBackgroundImageStyles: {
        resizeMode: "cover",
    },
    imageBackgroundWrapper: {
        height: 200,
        width: tileWidth,
    },
    itemText: {
        color: "white",
        width: "100%",
        fontSize: 20,
        zIndex: 1,
        paddingLeft: 10,
        paddingTop: 10
    },
    headerText: {
        fontSize: 25,
        fontWeight: "bold",
        paddingBottom: 10
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
