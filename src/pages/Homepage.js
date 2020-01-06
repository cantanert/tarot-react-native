import React from 'react';
import {SafeAreaView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import statics from "../statics/enumStatics";


export default class Homepage extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.homepageWrapper}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate("Articles")} style={styles.menuItemArticles}>
                    <Icon name="book-reader" style={styles.menuText}/>
                    <Text style={styles.menuText}>{statics.articles}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate("TarotCards")} style={styles.menuItemTarotCards}>
                    <Icon name="bandcamp" style={styles.menuText}/>
                    <Text style={styles.menuText}>{statics.tarotCards}</Text>
                </TouchableOpacity>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    homepageWrapper: {
        flex: 1,
    },
    menuItemArticles: {
        flexDirection: "row",
        flex:1,
        width: "100%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "lightgray"
    },
    menuItemTarotCards: {
        flexDirection: "row",
        flex:1,
        width: "100%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "whitesmoke"
    },
    menuText: {
        fontSize: 30,
        marginLeft:5
    }
});