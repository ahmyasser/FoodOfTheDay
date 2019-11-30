import React from 'react';
import {View ,Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import ResDetail from './ResDetail';
import { withNavigation } from 'react-navigation';

const ResaultLists=({title, res, navigation}) =>{
  if(!res.length){
    return null;
  }
  return(
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={res}
        keyExtractor={result =>result.id}
        renderItem={({item})=>{
        return (
        <TouchableOpacity onPress={() => navigation.navigate('ResShow',{id:item.id})}>
        <ResDetail item={item}/>
        </TouchableOpacity>)
        }}/>

    </View>
  );

};

const styles =StyleSheet.create({

titleStyle:{
  fontSize:18,
  fontWeight:'bold',
  marginLeft:15
},
container:{
  marginBottom:15
}
});

export default withNavigation(ResaultLists);
