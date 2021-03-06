import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ImageBackground,
    ScrollView
} from 'react-native';
import * as Font from 'expo-font';
import statics from "../statics/enumStatics";
import Author from "../components/Author";

const viewportHeight = Dimensions.get("window").height;
const headerHeight = viewportHeight / 3;

const unsplashRootUrl = statics.unsplashRootUrl;
const unsplashImageParameters = statics.unsplashImageParameters;

export default class ArticleDetails extends React.Component {

    async componentDidMount() {
        await Font.loadAsync({
            'AdventPro-medium': require('../../assets/fonts/AdventPro-Medium.ttf'),
        });
    }

    render() {
        const {navigation} = this.props;
        const item = navigation.getParam("item");
        return (
            <ScrollView style={{flex: 1}}>
                <ImageBackground
                    source={{uri: unsplashRootUrl + item.image + unsplashImageParameters}}
                    style={styles.header}
                    imageStyle={styles.headerBackgroundImage}>
                    <Text style={styles.headerText}>{item.name}</Text>
                    <View style={styles.headerBadge}/>
                </ImageBackground>
                <View style={styles.articleWrapper}>
                    <Text style={styles.articleContent}>
                        {item.content}
                    </Text>
                </View>
                <Author/>
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
        textAlign: "center",
        color: "white",
        fontSize: 30,
        zIndex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        fontWeight: "900"
    },
    articleWrapper: {
        padding: 20
    },
    articleContent: {
        fontSize: 16,
        fontFamily: "AdventPro-medium"
    }
});