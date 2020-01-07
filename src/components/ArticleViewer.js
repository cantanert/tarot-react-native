import React from 'react';
import {View, Text, StyleSheet, Dimensions, ImageBackground, ScrollView} from 'react-native';
import statics from "../statics/enumStatics";

const viewportHeight = Dimensions.get("window").height;
const headerHeight = viewportHeight / 3;

const unsplashRootUrl = statics.unsplashRootUrl;
const unsplashImageParameters = statics.unsplashImageParameters;

export default class ArticleViewer extends React.Component {
    render() {
        const {navigation} = this.props;
        const item = navigation.getParam("item");
        return (
            <ScrollView style={{flex: 1}}>
                <ImageBackground
                    source={{uri: unsplashRootUrl + item.image + unsplashImageParameters}}
                    style={styles.header}
                    imageStyle={styles.headerBackgroundImage}>
                    <Text style={styles.headerText}>{item.title}</Text>
                    <View style={styles.headerBadge}/>
                </ImageBackground>
                <View style={styles.articleWrapper}>
                    <Text style={styles.articleContent}>
                        {item.content}
                    </Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    headerBackgroundImage: {
        resizeMode: "cover",
    },
    headerBadge: {
        backgroundColor: "black",
        opacity: 0.5,
        height: "100%",
        width: "100%",
        position: "absolute",
    },
    header: {
        height: headerHeight,
        justifyContent: "center",
        alignItems: "center",
    },
    headerText: {
        color: "white",
        fontSize: 50,
        fontWeight: "bold",
        zIndex: 1,
    },
    articleWrapper: {
        padding: 20
    },
    articleContent: {
        fontSize: 16,
    }
});