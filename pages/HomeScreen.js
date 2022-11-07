import React, { useState, useEffect } from "react";
import {  ImageBackground, Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default class HomeScreen extends React.Component {

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

   // const image = { uri: "https://reactjs.org/logo-og.png" };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>HomeScreen</Text>
            <ImageBackground source={ {uri: "https://images.photowall.com/products/53211/more-coffee-beans.jpg?h=699&q=85" } } resizeMode="cover" style={styles.image}>
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
