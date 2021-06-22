import React from 'react'
import { View, Text, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';

const {width,height} = Dimensions.get('window');
//const windowWidth = Dimensions.get('window').width;
//const windowHeight = Dimensions.get('window').height;

export const CimensionesScreen = () => {
    const {width, height} = useWindowDimensions();

    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    ...styles.cajaMorada,
                    width: width * 0.2,}}>
                </View>
                <View style={styles.cajaNaranja}>
                </View>
                <Text style={styles.title}>W: {width}, H: {height}</Text>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: 'red',
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        //width: '50%',
        height: '50%',
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B',
    },
    title: {
        fontSize:20,

    }
});