import React from 'react'

import{StyleSheet, Text, View} from 'react-native'

const styles = StyleSheet.create({
    display:{
        backgroundColor: '#F5F5DC',
        padding: 20,
        color: 'black',
        padding: 20,
        margin: 20,
        height: 80,
        width: 310,
        borderRadius: 10,
    },
    displayValor: {
        fontSize: 15,
        color: 'black'
    },

    displayResultado: {
        fontSize: 15,
        color: 'black'
    },

})

export default props =>{ 
    return (
        <View style={styles.display}>
            <Text style={styles.displayValor}
                numberOfLines={1}>
                {props.valor}
            </Text>
            <Text style={styles.displayResultado}
                numberOfLines={1}>
                {props.res}
            </Text>
        </View>
    )
}