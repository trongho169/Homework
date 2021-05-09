import React, { Component } from 'react';
import { Text, View, Dimensions, Platform,SafeAreaView} from 'react-native';
// core react
// core native

export default class App extends Component {
  render() {
    return (
    <SafeAreaView style = {{ flex : 1, flexDirection: 'column',}}>
      <View style = {{flex: 0.3,backgroundColor:'red',borderWidth:3,justifyContent:'center',alignItems: 'center'}}>
      <Text style ={{color: 'white', fontSize: 20,fontWeight:'bold'}}>1</Text>
      </View>

      <View style = {{ flex : 0.7, flexDirection: 'row'}}>
          <View style = {{ flex : 0.3, backgroundColor: 'yellow',borderLeftWidth:3,borderRightWidth:3, borderBottomWidth:3, justifyContent: 'center',                          alignItems: 'center'}}>
          <Text style ={{color: 'white', fontSize: 20,fontWeight: 'bold'}}>2</Text></View>

          <View style = {{ flex : 0.7, flexDirection: 'column'}}>
              <View style = {{flex : 0.7, backgroundColor:'dodgerblue', borderRightWidth:3 ,borderBottomWidth:3, justifyContent: 'center',alignItems: 'center'}}>
              <Text style ={{color:'white',fontSize: 20,fontWeight: 'bold'}}>3</Text></View>

              <View style = {{ flex : 0.3, flexDirection: 'row'}}>
                  <View style = {{flex :0.7,backgroundColor:'pink',borderRightWidth:3,borderBottomWidth:3, justifyContent: 'center',alignItems: 'center'}}>
                  <Text style ={{color:'white',fontSize: 20,fontWeight: 'bold'}}>4</Text></View>
                  <View style = {{flex :0.7,backgroundColor:'darkorchid',borderRightWidth:3,borderBottomWidth:3, justifyContent: 'center',alignItems: 'center'}}>
                  <Text style ={{color:'white',fontSize:20,fontWeight:'bold'}}>5</Text></View>
              </View> 
          </View>
      </View>
    </SafeAreaView>
    )
  }
}

