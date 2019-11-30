import React, { useState, useEffect } from 'react';
import {View ,Text, StyleSheet, Image , FlatList} from 'react-native';
import yelp from '../apis/yelp'

const ResShowScreen=({navigation}) =>{
  const id= navigation.getParam('id');
  const [res,setRes]=useState(null);
  const [errMsg,setErrMsg]=useState("");

  const getRes= async id =>{
    try{
      const response= await yelp.get(`/${id}`);
      setRes(response.data);
    }
    catch(err){
      setErrMsg("Something went wrong");
      console.log(err);
    }
};

  useEffect(()=>{getRes(id)},[])

  if(!res){
    return null;
  }

  return(
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{res.name}</Text>
      <FlatList
      data={res.photos}
      keyExtractor={(photo)=>photo}
      renderItem={
        ({item})=>{
          return <Image style={styles.imageStyle} source={{uri:item}}/>
        }
      }
      />
    </View>
  );
};

const styles =StyleSheet.create({

  imageStyle:{
    width: 250,
    height: 150,
    marginBottom:15,
    borderRadius:4

  },
  titleStyle:{
    fontWeight:'bold',
    marginVertical:10
  },
  container:{
    marginLeft:15,

  }

});

export default ResShowScreen;
