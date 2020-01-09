import React from 'react';
import {Dimensions, Text, TouchableOpacity, FlatList, ImageBackground, StyleSheet, View, SafeAreaView} from 'react-native'
import mockedMajorArcanaData from "../statics/mockedMajorArcanaData";

const numColumns = 3;
const tileWidth = Dimensions.get("window").width / numColumns;


class MajorArcanaCards extends React.Component {
    render() {
        return (
            <View>
                <FlatList
                    data={mockedMajorArcanaData.sampleData}
                    renderItem={this.itemRenderer}
                    keyExtractor={(item) => item.name}
                    numColumns={3}
                />
            </View>
        );
    }

    itemRenderer = ({item}) => {
        return (
            <TouchableOpacity>
                <ImageBackground
                    source={item.image}
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
        resizeMode: "center",
    },
    imageBackgroundWrapper: {
        height: 200,
        width: tileWidth,
        justifyContent: "center",
        alignItems: "center"
    },
    itemText: {
        color: "white",
        fontSize: 15,
        fontWeight: "900",
        zIndex: 1,
        paddingLeft: 10,
    },
    itemTextBadge: {
        backgroundColor: "black",
        opacity: 0.6,
        height: "100%",
        width: "100%",
        position: "absolute",
    }
});

export default MajorArcanaCards;