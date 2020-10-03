import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { BarCodeScanner } from 'expo-barcode-scanner'
import * as permissions from 'expo-permissions' 

export default class BookScreen extends Component {
constructor(){
    super()
    this.state={
        hascamerapermmissions:null,
        scanned:false,
        scanneddata:"",
        buttonState:'normal'
    }
} 
getCameraPermmision=async()=>{
    const{status}=await permissions.askAsync(permissions.CAMERA)
    this.setstate({
        hascamerapermmissions:status==="granted",
        buttonState:'clicked',
        scanned:false
    })
}
handleBarCodeScanner=async({type,data})=>{
this.setState({
    buttonState:'normal',
    scanned:true,
    scanneddata:data
})
}
  render() {
  const scanned=this.state.scanned;
  const buttonState=this.state.buttonState
  if(buttonState==='clicked' && hascamerapermmissions===true){
        return(
            <BarCodeScanner
            onBarCodeScanned={
                scanned?undefined:this.handleBarCodeScanner
            }
            />
        )
  }
  else if(this.state.buttonState==='normal'){

  
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>Issue your book</Text>
        <Text>
        {this.state.hascamerapermmissions===true?this.state.scanneddata:"Request camera permission"}
        </Text>
        <TouchableOpacity style={ss.scan} onpress={this.getCameraPermmision}>
        <Text> Scan QR code </Text>
        </TouchableOpacity>
        </View>
    )
  }
  else{
        return(
            <Text>{this.state.buttonState}</Text>
        )
  }
}
}
const ss = StyleSheet.create({
scan:{
backgroundColor:'blue',
alignItems:'center',
justifyContent:'center',
marginTop:30,
height:30,
width:60
}
})