import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'


export default props => {
  const stylesButton = [styles.botoes]
  if (props.soma) stylesButton.push(styles.botaoSoma)
  if (props.apaga) stylesButton.push(styles.botaoApaga)
  if (props.resultado) stylesButton.push(styles.botaoResultado)
  return (
      <TouchableOpacity onPress={() => props.onClick(props.texto)}>
          <Text style={stylesButton}>{props.texto}</Text>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    botoes: {
        fontSize: 15,
        height: 55,
        width: 65,
        padding: 15,
        backgroundColor: '#363636',
        textAlign: 'center',
        color: '#F5F5DC',
        borderWidth: 5,
        borderColor: 'black',
        borderRadius: 10,
    },
  
    botaoSoma: {
        width: 65,
        height: 55,
        borderRadius: 10,
        textAlign: 'center',
    },
    
    botaoApaga: {
        width: 65,
        backgroundColor: '#FF8C00',
        fontSize: 12,
        borderRadius: 15,
        textAlign: 'center',
    },

    botaoResultado: {
      fontSize: 15,
      height: 55,
      width: 128,
      padding: 15,
      backgroundColor: '#363636',
      textAlign: 'center',
      color: '#F5F5DC',
      borderColor: 'black',
      borderRadius: 10,
  },
})
