//import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View, Text} from 'react-native';
import Buttons from './src/components/Buttons';
import Display from './src/components/Display';
import React, {Component, useState} from 'react'

let estado={
  valorDisplay: '',
  resultado: 0,
  operado: false,
  ponto:false

}

export default function App () {
  const [valorD, setValorD] = useState(estado.valorDisplay)
  const [resultado, setResultado] = useState(estado.resultado)

  const addNumero=(num)=>{
    if(num=='+' || num=='-' || num=='/' || num=='*' || num=='%') {
      estado.ponto=false
    }

    if(num=="."&& !estado.ponto){
      estado.ponto=true
      estado.operado=false
    } else if(num=="." && estado.ponto){
      return
    }
    
    if((num=='+' || num=='-' || num=='/' || num=='*' || num=='%') && estado.operado) {
      estado.valorDisplay = estado.resultado
      estado.resultado = 0  
    }

    estado.valorDisplay=estado.valorDisplay + num 
    setValorD(estado.valorDisplay)
    setResultado(estado.resultado)
    estado.operado=false 
  }

  const limparTela=()=>{
    estado={
      valorDisplay: '',
      resultado: 0,
      operado: false,
      ponto:false
    }
    setValorD(estado.valorDisplay)
    setResultado(estado.resultado)
  }

  const opera=(num)=>{
    if(num=='CE/C'){
      limparTela()
      return
    }
    if(num=='>'){
      estado.valorDisplay=valorD.substring(0, valorD.length-1)
      setValorD(estado.valorDisplay)
      return
    }
    try{
      estado.resultado=eval(estado.valorDisplay)
      estado.operado=true
      setResultado(estado.resultado)
    }catch{
      estado.resultado='Erro'
      estado.operado=true
      setResultado(estado.resultado)
    }
  }


  return (
      <View style={styles.container}>
        <Display valor={valorD} res = {resultado}/>
          <View style={styles.botaoApagar}>
            <Buttons texto ='CE/C' apaga onClick={() => {opera('CE/C')}}/>
          </View>
          <View style={styles.buttons}>  
            <Buttons texto = '7' onClick={() => {addNumero('7')}}/>
            <Buttons texto = '8' onClick={() => {addNumero('8')}}  />
            <Buttons texto = '9' onClick={() => {addNumero('9')}} />
            <Buttons texto = '%' op onClick={() => {addNumero('%')}} />
            <Buttons texto = '>' onClick={() => {opera('>')}} />
            <Buttons texto = '4' onClick={() => {addNumero('4')}}  />
            <Buttons texto = '5' onClick={() => {addNumero('5')}}  />
            <Buttons texto = '6' onClick={() => {addNumero('6')}}  />
            <Buttons texto = 'x' op onClick={() => {addNumero('*')}} />
            <Buttons texto = '÷' op onClick={() => {addNumero('/')}} />
            <Buttons texto = '1' onClick={() => {addNumero('1')}} />
            <Buttons texto = '2' onClick={() => {addNumero('2')}} />
            <Buttons texto = '3' onClick={() => {addNumero('3')}} />
            <Buttons texto = '+' op onClick= {() => {addNumero('+')}} />
            <Buttons texto = '-' op onClick= {() => {addNumero('-')}} />
            <Buttons texto = '0' onClick={() => {addNumero('0')}} />
            <Buttons texto = '00' onClick={() => {addNumero('00')}} />
            <Buttons texto = '.' onClick={() => {addNumero('.')}} />
            <Buttons texto = '=' resultado onClick={() => {opera('=')}} />
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
  
});
