import React from 'react';
import {SafeAreaView, Button, StyleSheet, View} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";


export default class Homepage extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.homepageWrapper}>
                <View style={{ flexDirection: "row", alignItems:"center" }}>
                    <Icon name="book-reader" style={{fontSize:30}}/>
                    <Button title={"Tarot Readings"} onPress={()=> this.props.navigation.navigate("TarotReadings")}/>
                </View>
                <View style={{ flexDirection: "row", alignItems:"center" }}>
                    <Icon name="bandcamp" style={{fontSize:30}}/>
                    <Button title={"Tarot Card Categories"} onPress={()=> this.props.navigation.navigate("TarotCardCategoriesRoute")}/>
                </View>
                <View style={{ flexDirection: "row", alignItems:"center" }}>
                    <Icon name="cannabis" style={{fontSize:30}}/>
                    <Button title={"Major Arcana Cards"} onPress={()=> this.props.navigation.navigate("MajorArcanaCardsRoute")}/>
                </View>
                <View style={{ flexDirection: "row", alignItems:"center" }}>
                    <Icon name="code" style={{fontSize:30}}/>
                    <Button title={"Minor Arcana Cards"} onPress={()=> this.props.navigation.navigate("MinorArcanaCardsRoute")}/>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    homepageWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    customButton: {
        backgroundColor: "yellow"
    }
});