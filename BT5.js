import React, { Component } from 'react';
import { Text, View, Dimensions, Platform,SafeAreaView} from 'react-native';
export default class App extends Component {
  render() {
    const ten ={t1:'Ho',t2:'Van',t3:'Trong'}
    return (
    <SafeAreaView style = {{flex:1,flexDirection:'column'}}>

      <View style = {{ flex : 0.3,backgroundColor:'yellow', justifyContent:'space-evenly'}}>
        <Text style ={{alignSelf:'flex-start',fontSize:20,fontWeight:800,color:'green'}}>{ten.t1}</Text>
        <Text style ={{alignSelf:'center',fontSize:20,fontWeight:800,color:'green',}}>{ten.t2}</Text>
        <Text style ={{alignSelf:'flex-end',fontSize:20,fontWeight:800,color:'green',}}>{ten.t3}</Text>
      </View>

      <View style = {{ flex :0.35,flexDirection:'row'}}>
        <Text style ={{flex:1,backgroundColor:'pink',fontSize:20,fontWeight:800,color:'green',textAlign:'center',textAlignVertical:'center'}}>{ten.t1}</Text>
        <Text style ={{flex:1,backgroundColor:'cyan',fontSize:20,fontWeight:800,color:'green',textAlign:'center',textAlignVertical:'center'}}>{ten.t2}</Text>
        <Text style ={{flex:1,backgroundColor:'red',fontSize:20,fontWeight:800,color:'green',textAlign:'center',textAlignVertical:'center'}}>{ten.t3}</Text>
      </View>

      <View style = {{ flex : 0.35,flexDirection:'row'}}>
        <View style = {{ flex : 0.35,flexDirection:'row',backgroundColor:'cyan',justifyContent:'center',alignItems:'center'}}>
          <Text style ={{fontSize:20,fontWeight:800,color:'red'}}>{ten.t1}</Text>
        </View>
        <View style = {{ flex : 0.35,backgroundColor:'green',justifyContent:'center',alignItems:'center'}}>
          <Text style ={{fontSize:20,fontWeight:800,color:'red',}}>{ten.t2}</Text>
        </View>
        <View style = {{ flex : 0.35,backgroundColor:'pink',justifyContent:'center',alignItems:'center'}}>
          <Text style ={{fontSize:20,fontWeight:800,color:'red',}}>{ten.t3}</Text>
        </View>
      </View>     

    </SafeAreaView>
    )
  }
}

