import React, { Component } from 'react';
import { Text, View, Dimensions, Platform,SafeAreaView} from 'react-native';
// core react
// core native

export default class App extends Component {
  render() {
    return (
    <SafeAreaView style = {{flex : 1, flexDirection: 'column'}}>
      <View style = {{flex: 0.15,flexDirection: 'row'}}>
          <View style = {{flex: 0.4,backgroundColor:'red',borderWidth:3,
               justifyContent:'center',alignItems:'center'}}>
          <Text style ={{color: 'white', fontSize: 30,fontWeight:'bold'}}>1</Text>
          </View>
          <View style = {{flex: 0.6,backgroundColor:'yellow',borderTopWidth:3,  
                borderRightWidth:3,borderBottomWidth:3,justifyContent:'center', 
                alignItems:'center'}}>
          <Text style ={{color: 'white', fontSize: 30,fontWeight:'bold'}}>2</Text>
          </View>
      </View>

      <View style = {{flex: 0.6,flexDirection:'row'}}>
          <View style= {{flex: 0.8,flexDirection:'column'}}>
              <View style= {{flex: 0.5,backgroundColor:'limegreen',justifyContent:'center',
            alignItems:'center',borderRightWidth:3,borderLeftWidth:3,borderBottomWidth:3}}>
              <Text style ={{color: 'white', fontSize: 30,fontWeight:'bold'}}>3</Text>
              </View>
              <View style= {{flex: 0.5,backgroundColor:'darkorchid',justifyContent:'center',
            alignItems:'center',borderRightWidth:3,borderLeftWidth:3,borderBottomWidth:3}}>
              <Text style ={{color: 'white', fontSize: 30,fontWeight:'bold'}}>4</Text>
              </View>
          </View>
          <View style= {{flex: 0.2,backgroundColor:'silver',justifyContent:'center',
            alignItems:'center',borderRightWidth:3,borderBottomWidth:3}}>
          <Text style ={{color: 'white', fontSize: 30,fontWeight:'bold'}}>5</Text>
          </View>
      </View>

      <View style = {{flex: 0.25,flexDirection:'row'}}>
          <View style= {{flex: 0.5,backgroundColor:'orange',justifyContent:'center',
            alignItems:'center',borderRightWidth:3,borderLeftWidth:3,borderBottomWidth:3}}>
          <Text style ={{color: 'white', fontSize: 30,fontWeight:'bold'}}>6</Text>
          </View>
          <View style= {{flex: 0.5,backgroundColor:'steelblue',justifyContent:'center',
            alignItems:'center',borderRightWidth:3,borderBottomWidth:3}}>
          <Text style ={{color: 'white', fontSize: 30,fontWeight:'bold'}}>7</Text>
          </View>
      </View>
    </SafeAreaView>
    )
  }
}

