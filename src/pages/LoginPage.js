import React from "react";
import {View, Text, StyleSheet, Image, TextInput} from "react-native";
import {Button} from "react-native-elements"

export default class LoginPage extends React.Component {
    render() {
        return (
            <View style={styles.page}>
                <View style={styles.logoImageWrapper}>
                    <Image style={styles.logoImage} source={require("../../assets/logo.png")}/>
                </View>
                <View style={styles.loginForm}>
                    <View style={{flex: 1, justifyContent: "center"}}>
                        <TextInput style={styles.textInput} placeholder={"Username"} placeholderTextColor={"#17252a"}/>
                        <TextInput secureTextEntry={true} style={styles.textInput} placeholder={"Password"}
                                   placeholderTextColor={"#17252a"}/>
                    </View>
                    <View style={{flex: 1, justifyContent: "center"}}>
                        <Button buttonStyle={styles.submitButton} title={"Submit"} onPress={() => this.submitLogin()}/>
                    </View>
                </View>
            </View>
        );

    }

    submitLogin = () => {
        this.props.navigation.navigate("Home");
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#def2f1"
    },
    logoImageWrapper: {
        flex: 5,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowOffset: {width: 5, height: 10}
    },
    logoImage: {
        width: 190,
        height: 190
    },
    loginForm: {
        flex: 6,
        paddingRight: "15%",
        paddingLeft: "15%",
        fontWeight: "900"
    },
    textInput: {
        height: 30,
        borderColor: "#17252a",
        borderBottomWidth: 3,
        fontSize: 25,
        marginTop: 40
    },
    submitButton: {
        backgroundColor: "#3aafa9",
        borderRadius: 5,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowOffset: {width: 3, height: 3}
    }
});