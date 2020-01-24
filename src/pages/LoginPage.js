import React from "react";
import {View,Text, StyleSheet, Image, TextInput} from "react-native";
import {Button} from "react-native-elements"

export default class LoginPage extends React.Component{
    render() {
        return(
          <View style={styles.page}>
              <View style={styles.logoImage}>
                  <Image source={require("../../assets/logo.png")}/>
              </View>
              <View style={styles.loginForm}>
                  <View style={{flex:1, justifyContent:"center"}}>
                      <TextInput style={styles.textInput} placeholder={"Username"} placeholderTextColor={"#17252a"}/>
                      <TextInput style={styles.textInput} placeholder={"Password"} placeholderTextColor={"#17252a"}/>
                  </View>
                  <View style={{flex:1, justifyContent:"center"}}>
                    <Button buttonStyle={styles.submitButton} title={"Submit"} onPress={()=>this.submitLogin()} />
                  </View>
              </View>
          </View>
        );

    }

    submitLogin = () => {

    }
}

const styles = StyleSheet.create({
    page:{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#def2f1"
    },
    logoImage:{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowOffset: {width:5, height:10}
    },
    loginForm:{
        flex: 1,
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
        shadowOffset: {width: 3, height:3}
    }
});