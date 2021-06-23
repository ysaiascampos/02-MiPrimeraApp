import React from 'react'
import { View, Text, StyleSheet } from 'react-native';


export const PositionScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.cajaVerde} />
            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />
            
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#28C4D9',
        flex: 1,
        // width: 400,
        // height: 400,
        // justifyContent: 'center',
        // alignContent:'center',
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
        position: 'absolute',
        right: 0,
        
    },
    cajaNaranja: {
        width: 100,
        height:100,
        backgroundColor:'#f37d47',
        borderWidth:10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    cajaVerde: {
        // width: 100,
        // height:100,
        backgroundColor:'#0dfd2d',
        borderWidth:10,
        borderColor: 'white',
        // position: 'absolute',
        // bottom: 0,
        // left: 0,
        // top:0,
        // right:0,
        ...StyleSheet.absoluteFillObject
    },
});