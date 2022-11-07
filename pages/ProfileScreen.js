import React, { useState, useEffect } from "react";
import { ImageBackground, Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class ProfileScreen extends React.Component {

constructor(props) {
    super(props);
    this.state = {
    };
}

componentDidMount(){

  this.setState({
  })
}


  render() {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile Screen</Text>
            <ImageBackground source={ {uri: "https://cdn1.vectorstock.com/i/1000x1000/45/65/personal-profile-template-vector-15714565.jpg" } } resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Heyyy there</Text>
    </ImageBackground>
            
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    image: {
      flex: 1,
      justifyContent: "center",
      width: '100%',
      height: '100%',
    },
    text: {
        fontSize:20,
    },
});
