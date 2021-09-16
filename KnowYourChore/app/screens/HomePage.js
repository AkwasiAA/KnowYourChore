import React, { useEffect, useState } from "react";
import { Text, Image, SafeAreaView, ImageBackground, StyleSheet, Button} from "react-native";




function HomePage ({navigation}) {
    
    const logo = require('../assets/logo.png')

    const handlePress = () =>{
        navigation.navigation('ListScreen')
    }

    return (

            <ImageBackground resizeMode ="contain" style ={styles.background} source ={logo}>
                <Button  style ={styles.button} title =" Go To App " onPress={handlePress}/>
            </ImageBackground>
        
    )
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"flex-end"
        },
    button:{
        height: 100
    }
        
    
    
})

export default HomePage