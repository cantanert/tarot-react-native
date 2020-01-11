import React from "react";
import {View,Text, StyleSheet} from "react-native";


const Title = (props) => {
    return(
        <Text style={styles.Text}>{props.text}</Text>
    );
};

const styles = StyleSheet.create({
    Text: {
        color: "black",
        fontSize: 30,
        fontWeight: "900",
        alignSelf: "flex-start",
        marginTop: 20,
        marginLeft: 20
    }
});

export default Title;