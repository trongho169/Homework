import React, { Component } from 'react';
import { Text, View, Dimensions, Platform,SafeAreaView} from 'react-native';
// core react
// core native

export default class App extends Component {
  render() {
    return (
    <SafeAreaView style = {{ flex : 1, flexDirection: 'column',}}>
      <View style = {{ flex : 0.5, flexDirection: 'column'}}>
          <View style = {{ flex : 1, backgroundColor: 'red',justifyContent: 'center',
             alignItems: 'center'}}>
          <Text style ={{backgroundColor: '', fontSize: 20}}>A</Text></View>
          <View style = {{ flex : 1, backgroundColor: 'green',justifyContent: 'center',
             alignItems: 'center'}}>
          <Text style ={{backgroundColor: '',fontSize: 20}}>B</Text></View>
          <View style = {{ flex : 1, backgroundColor: 'olivedrab',justifyContent: 'center',
             alignItems: 'center'}}>
          <Text style ={{backgroundColor: '',fontSize: 20}}>C</Text></View>
          <View style = {{ flex : 1, backgroundColor: 'blue',justifyContent: 'center',
             alignItems: 'center'}}>
          <Text style ={{backgroundColor: '',fontSize: 20}}>D</Text></View>
      </View>

      <View style = {{ flex : 0.5, flexDirection: 'row'}}>
          <View style = {{ flex : 1, backgroundColor: 'khaki',justifyContent: 'center',
             alignItems: 'center'}}>
          <Text style ={{backgroundColor: '', fontSize: 20}}>A</Text></View>
          <View style = {{ flex : 1, backgroundColor: 'gray',justifyContent: 'center',
             alignItems: 'center'}}>
          <Text style ={{backgroundColor: '',fontSize: 20}}>B</Text></View>
          <View style = {{ flex : 1, backgroundColor: 'blueviolet',justifyContent: 'center',
             alignItems: 'center'}}>
          <Text style ={{backgroundColor: '',fontSize: 20}}>C</Text></View>
          <View style = {{ flex : 1, backgroundColor: 'darkmagenta',justifyContent:'center',
             alignItems: 'center'}}>
          <Text style ={{backgroundColor: '',fontSize: 20}}>D</Text></View>
      </View>
    </SafeAreaView>
    )
  }
}