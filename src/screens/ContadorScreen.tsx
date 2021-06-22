import React, { useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export const ContadorScreen = () => {
    const [contador, setContador] = useState(10);
  return (
    <View style={ styles.container }>
      <Text style={styles.titulo}>
        Contador: {contador}
      </Text>
      <TouchableOpacity
        style={styles.fabLocationBl}
        onPress={() => setContador(contador - 1)}
      >
        <View style={styles.fab}>
            <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.fabLocationBr}
        onPress={() => setContador(contador + 1)}
      >
        <View style={styles.fab}>
            <Text style={styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 40,
        textAlign: 'center',
        top: -15,
    },
    fabLocationBl: {
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    fabLocationBr: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'bold',
        alignSelf: 'center',

    },

})