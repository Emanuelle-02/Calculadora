//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Buttons from './src/components/Buttons';

export default function App() {
  return (
    
    <View style={styles.container}>
      <View>
      <Text style = {styles.display}>  </Text>
      </View>
          <View style={styles.botaoApagar}>
            <Buttons texto ='CE/C' apaga />
          </View>
          <View style={styles.buttons}>  
            <Buttons texto = '7'  />
            <Buttons texto = '8'  />
            <Buttons texto = '9'  />
            <Buttons texto = '%'  />
            <Buttons texto = '>'  />
            <Buttons texto = '4'  />
            <Buttons texto = '5'  />
            <Buttons texto = '6'  />
            <Buttons texto = 'x'  />
            <Buttons texto = '÷'  />
            <Buttons texto = '1'  />
            <Buttons texto = '2'  />
            <Buttons texto = '3'  />
            <Buttons texto = '+' soma />
            <Buttons texto = '-'  />
            <Buttons texto = '0'  />
            <Buttons texto = '00' />
            <Buttons texto = '.'  />
            <Buttons texto = '=' resultado />
          </View>
          <View style={styles.botaoApagar}>
            
            </View>
          <View style={styles.botaoResultado}>
           
          </View>
      </View>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 2,
  },

  display: {
    backgroundColor: '#F5F5DC',
    color: 'black',
    padding: 20,
    margin: 20,
    fontSize: 30,
    height: 80,
    width: 310,
    borderRadius: 10
  
  },

  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 10,
    marginLeft: 15,
  },

  botaoApagar: {
    alignSelf: 'flex-end',
    marginRight: 18,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  botaoResultado: {
    alignSelf: 'flex-end',
    marginRight: 20,  
    paddingBottom: 10, 
  
  },
  
});
