import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={ styles.title }>Box object model</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    title: {
        fontSize: 20,
        //width: 150,
        borderWidth:10,
        //padding: 50,
        paddingHorizontal:100,
        paddingVertical:20,
        marginHorizontal:20,

        //backgroundColor: 'red',
    }
});