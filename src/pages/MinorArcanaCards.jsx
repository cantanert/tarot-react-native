import React from 'react';
import {Dimensions, Text, TouchableOpacity, FlatList, ImageBackground, StyleSheet, View, SafeAreaView} from 'react-native'
import statics from "../statics/enumStatics";

const numColumns = 3;
const tileWidth = Dimensions.get("window").width / numColumns;

const unsplashRootUrl = statics.unsplashRootUrl;
const unsplashImageParameters = statics.unsplashImageParameters;


class MajorArcanaCards extends React.Component {
    render() {
        const cardData = this.props.navigation.getParam("item");
        return (
            <View>
                <FlatList
                    data={cardData.subCards}
                    renderItem={this.itemRenderer}
                    keyExtractor={(item) => item.name}
                    numColumns={3}
                />
            </View>
        );
    }

    itemRenderer = ({item}) => {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate(item.route,{item:item})}>
                <ImageBackground
                    source={require("../../assets/cards/minor-arcana-cards/cups/king.png")}
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