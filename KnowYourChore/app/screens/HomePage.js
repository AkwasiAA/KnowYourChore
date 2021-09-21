import React, { useEffect, useState } from "react";
import { Text, ImageBackground, StyleSheet, Pressable} from "react-native";

const logo = require('../assets/logo.png')


function HomePage ({navigation}) {
    
    const logo = require('../assets/logo.png')

    return (
            <ImageBackground resizeMode ="contain" style ={styles.background} source ={logo}>
                
                <Pressable style = {styles.pressableButtons} onPress={() => {navigation.push('Selection')}}>
                    <Text> Enter </Text>
                </Pressable>
                
            </ImageBackground>
    )
}


const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end",
        backgroundColor:"white"
        },
    pressableButtons:{
        alignItems: 'center',
        alignSelf:'center',
        margin:10,
        paddingVertical: 10,
        paddingHorizontal: 100,
        borderRadius: 25,
        elevation: 3,
        backgroundColor: 'lightblue',
    }   
    
})

export default HomePage