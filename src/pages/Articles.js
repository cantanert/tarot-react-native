import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
} from 'react-native';
import statics from "../statics/enumStatics";
import articles from "../statics/mockedArticleData"

const unsplashRootUrl = "https://images.unsplash.com/photo-";
const unsplashImageParameters = "?auto=format&fit=crop&w=375&q=80";

const viewportHeight = Dimensions.get("window").height;
const itemHeight = viewportHeight / 4;

class TarotReadings extends React.Component {
    render() {
        return (
            <View>
                <FlatList
                    data={articles}
                    renderItem={this.itemRenderer}
                />
            </View>
        );
    }

    itemRenderer = ({item}) => {
        return (
            <TouchableOpacity onPress={() => this.routeDispatcher(item)}>
                <ImageBackground
                    source={{uri: unsplashRootUrl + item.image + unsplashImageParameters}}  /*TODO dynamic with BE, get images from response*/
                    imageStyle={styles.imageBackgroundImageStyles}
                    style={styles.imageBackgroundWrapper}>
                    <Text style={styles.itemText}>{item.title}</Text>
                    <View style={styles.itemTextBadge}/>
                </ImageBackground>
            </TouchableOpacity>
        );
    }
    routeDispatcher = (item) => {
        this.props.navigation.navigate(statics.ArticleViewer,{
           item: item
        });
    }
}


const styles = StyleSheet.create({
    imageBackgroundImageStyles: {
        resizeMode: "cover",
    },
    imageBackgroundWrapper: {
        width: "100%",
        height: itemHeight,
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
    }
});

export default TarotReadings;