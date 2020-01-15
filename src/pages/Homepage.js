import React from 'react';
import {SafeAreaView, Text, StyleSheet, TouchableOpacity, ImageBackground, View} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import statics from "../statics/enumStatics";

//parsed image url parts
const unsplashRootUrl = statics.unsplashRootUrl;
const unsplashImageParameters = statics.unsplashImageParameters;

export default class Homepage extends React.Component {
    render() {
        return (
            <View style={styles.homepageWrapper}>
                <ImageBackground
                    source={{uri: unsplashRootUrl + "1568817864737-638432504138" + unsplashImageParameters}}
                    style={styles.imageBackgroundWrapper}
                    imageStyle={styles.imageBackgroundImageStyles}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Articles")}
                                      style={styles.menuItemArticles}>
                        <View style={styles.itemTextBadge}/>
                        <Icon name="book-reader" style={styles.menuIcon}/>
                        <Text style={styles.menuText}>{statics.articles}</Text>
                    </TouchableOpacity>
                </ImageBackground>
                <ImageBackground
                    source={{uri: unsplashRootUrl + "1506362802973-bd1717de901c" + unsplashImageParameters}}
                    style={styles.imageBackgroundWrapper}
                    imageStyle={styles.imageBackgroundImageStyles}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("TarotCards")}
                                      style={styles.menuItemTarotCards}>
                        <View style={styles.itemTextBadge}/>
                        <Icon name="bandcamp" style={styles.menuIcon}/>
                        <Text style={styles.menuText}>{statics.tarotCards}</Text>
                    </TouchableOpacity>
                </ImageBackground>
                <ImageBackground
                    source={{uri: unsplashRootUrl + "1568817864737-638432504138" + unsplashImageParameters}}
                    style={styles.imageBackgroundWrapper}
                    imageStyle={styles.imageBackgroundImageStyles}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("TarotReading")}
                                      style={styles.menuItemReading}>
                        <View style={styles.itemTextBadge}/>
                        <Icon name="crow" style={styles.menuIcon}/>
                        <Text style={styles.menuText}>{statics.tarotReading}</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageBackgroundWrapper:{
        width: "100%",
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    imageBackgroundImageStyles: {
        resizeMode: "cover"
    },
    homepageWrapper: {
        flex: 1,
    },
    menuItemArticles: {
        flexDirection: "row",
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    menuItemTarotCards: {
        flexDirection: "row",
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    menuItemReading:{
        flexDirection: "row",
        flex:1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    menuText: {
        fontSize: 30,
        marginLeft: 5,
        zIndex: 1,
        color: "white",
        paddingLeft: 10,
        fontWeight: "900"
    },
    menuIcon:{
        fontSize: 100,
        color: "whitesmoke"
    },
    itemTextBadge: {
        backgroundColor: "black",
        opacity: 0.4,
        height: "100%",
        width: "100%",
        position: "absolute",
    }
});