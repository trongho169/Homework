import React, { Component } from 'react';
import { Text, View, Dimensions, Platform,SafeAreaView} from 'react-native';
// core react
// core native

export default class App extends Component {
  render() {
    return (
    <SafeAreaView style = {{flex : 1, flexDirection: 'column'}}>
      <View style={{flex:0.5,flexDirection: 'row'}}>
          <View style={{flex:0.3,backgroundColor:'lime',justifyContent:'center',
                alignItems:'center'}}>
          <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>1</Text>
          </View>
          <View style={{flex:0.7,flexDirection: 'column'}}>
               <View style={{flex:0.5,backgroundColor:'red',justifyContent:'center',
                alignItems:'center'}}>
               <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>3</Text>
               </View>
               <View style={{flex:0.5,backgroundColor:'darksalmon',justifyContent:'center',
                alignItems:'center'}}>
               <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>4</Text>
               </View>
          </View>
      </View>

      <View style={{flex:0.5,flexDirection: 'row'}}>
          <View style={{flex:0.3,backgroundColor:'khaki',justifyContent:'center',
                alignItems:'center'}}>
          <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>2</Text>
          </View>

          <View style={{flex:0.5,flexDirection: 'column'}}>
               <View style={{flex:0.5,backgroundColor:'deepskyblue',justifyContent:'center',
                alignItems:'center'}}>
               <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>5</Text>
               </View>
               <View style={{flex:0.5,backgroundColor:'darkviolet',justifyContent:'center',
                alignItems:'center'}}>
               <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>6</Text>
               </View>
          </View>

          <View style={{flex:0.2,flexDirection: 'column'}}>
               <View style={{flex:0.5,backgroundColor:'darkviolet',justifyContent:'center',
                alignItems:'center'}}>
               <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>7</Text>
               </View>
               <View style={{flex:0.5,backgroundColor:'darkorange',justifyContent:'center',
                alignItems:'center'}}>
               <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>8</Text>
               </View>
               <View style={{flex:0.5,backgroundColor:'silver',justifyContent:'center',
                alignItems:'center'}}>
               <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>9</Text>
               </View>
          </View>
      </View>
    </SafeAreaView>
    )
  }
}

