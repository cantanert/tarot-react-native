import React from "react";
import {
    FlatList,
    TouchableOpacity,
    ImageBackground,
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Dimensions,
    StatusBar
} from "react-native";
import statics from '../statics/enumStatics'

const viewportHeight = Dimensions.get("window").height;
const statusBarHeight = StatusBar.currentHeight;
const itemHeight = (viewportHeight-80) / 2; //TODO get viewport height without navbar

const unsplashRootUrl = statics.unsplashRootUrl;
const unsplashImageParameters = statics.unsplashImageParameters;

const tarotCardCategories = [
    {name: statics.MajorArcana, image: "1568821137008-6a947a8decfc"},
    {name: statics.MinorArcana, image: "1556739442-4c892bcbe8ba"}
];

class TarotCardCategories extends React.Component {
    render() {
        console.log(statusBarHeight);
        return (
                <FlatList data={tarotCardCategories} renderItem={this.itemRenderer} keyExtractor={(item) => item.name}/>
        );
    }

    itemRenderer = ({item}) => {
        return (
            <TouchableOpacity onPress={() => this.menuDispatcher(item.name)} style={{height:itemHeight}}>
                <ImageBackground
                    source={{uri: unsplashRootUrl + item.image + unsplashImageParameters}}
                    style={styles.imageBackgroundWrapper}
                    imageStyle={styles.imageBackgroundImageStyles}>
                    <Text style={styles.itemText}>{item.name}</Text>
                    <View style={styles.itemTextBadge}/>
                </ImageBackground>
            </TouchableOpacity>
        );
    };

    menuDispatcher = (item) => {
        let route;
        (item === statics.MinorArcana) ? route = statics.MinorArcanaCardsRoute : route = statics.MajorArcanaCardsRoute;
        this.props.navigation.navigate(route);
    }
}

const styles = StyleSheet.create({
    imageBackgroundImageStyles: {
        resizeMode: "cover",
    },
    imageBackgroundWrapper: {
        width: "100%",
        flex:1
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
    },
});


export default TarotCardCategories;


