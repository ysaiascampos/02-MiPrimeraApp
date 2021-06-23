import React from 'react'
import { View, Text, StyleSheet } from 'react-native';


export const PositionScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#28C4D9',
        //flex: 1,
        width: 300,
        height: 300,
        justifyContent: 'center',
        alignContent:'center',
    },
    title: {
        fontSize:20,
    },
    cajaMorada: {
        width: 100,
        height:100,
        backgroundColor:'#5856D6',
        borderWidth:10,
        borderColor: 'white',
        position: 'relative',
        
    },
    cajaNaranja: {
        width: 100,
        height:100,
        backgroundColor:'#f37d47',
        borderWidth:10,
        borderColor: 'white',
        top: 10,
    },
});