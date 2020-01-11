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
        this.numColumns = this.props.numColumns;
        this.passData = this.props.passData;

        return(
            <View>
                <FlatList
                    data={this.dataList}
                    renderItem={this.itemRenderer}
                    keyExtractor={(item) => item.name}
                    numColumns={this.numColumns}
                />
            </View>
        );
    }

    itemRenderer = ({item}) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.nav.navigate(item.route,{item:item})
                }}

                style={{height:this.listItemHeight}}>
                <ImageBackground
                    source={{uri: unsplashRootUrl + item.image + unsplashImageParameters}}
                    style={styles.imageBackgroundWrapper}
                    imageStyle={styles.imageBackgroundImageStyles}
                >
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
        flex:1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    itemText: {
        color: "white",
        fontSize: 30,
        zIndex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        fontWeight: "900"
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