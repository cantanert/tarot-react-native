import React from 'react';
import {SafeAreaView, Button, StyleSheet, View} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import statics from "../statics/enumStatics"

export default class Homepage extends React.Component {
    render() {
        return (
            <SafeAreaView style={styles.homepageWrapper}>
                <View style={{ flexDirection: "row", alignItems:"center" }}>
                    <Icon name="book-reader" style={{fontSize:30}}/>
                    <Button title={statics.tarotReadings} onPress={()=> this.props.navigation.navigate("TarotReadings")}/>
                </View>
                <View style={{ flexDirection: "row", alignItems:"center" }}>
                    <Icon name="bandcamp" style={{fontSize:30}}/>
                    <Button title={statics.tarotCards} onPress={()=> this.props.navigation.navigate("TarotCards")}/>
                </View>
                <View style={{ flexDirection: "row", alignItems:"center" }}>
                    <Icon name="cannabis" style={{fontSize:30}}/>
                    <Button title={statics.majorArcanaCards} onPress={()=> this.props.navigation.navigate("MajorArcanaCards")}/>
                </View>
                <View style={{ flexDirection: "row", alignItems:"center" }}>
                    <Icon name="code" style={{fontSize:30}}/>
                    <Button title={statics.minorArcanaCards} onPress={()=> this.props.navigation.navigate("MinorArcanaCards")}/>
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