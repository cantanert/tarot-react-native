import React from 'react';
import {Dimensions, FlatList, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import statics from "../statics/enumStatics";

//parsed image url parts
const unsplashRootUrl = statics.unsplashRootUrl;
const unsplashImageParameters = statics.unsplashImageParameters;


class MenuRenderer extends React.Component {
    render() {
        this.nav= this.props.nav;
        this.dataList= this.props.dataList;
        this.listItemHeight= this.props.listItemHeight;
        return(
            <View>
                <FlatList data={this.dataList} renderItem={this.itemRenderer} keyExtractor={(item) => item.name}/>
            </View>
        );
    }

    itemRenderer = ({item}) => {
        return (
            <TouchableOpacity onPress={() => this.nav.navigate(item.route)} style={{height:this.listItemHeight}}>
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


export default MenuRenderer;