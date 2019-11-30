import React from 'react';
import {View ,Text, StyleSheet, Image } from 'react-native';

const ResDetail=({item}) =>{

  return(
    <View style={styles.container}>
    <Image style={styles.imageStyle} source={{uri: item.image_url}}/>
      <Text style={styles.titleStyle}>{item.name}</Text>
      <Text >{item.rating} Stars {item.review_count} reviews </Text>
    </View>
  );

};

const styles =StyleSheet.create({

  imageStyle:{
    width: 250,
    height: 150,
    borderRadius:4

  },
  titleStyle:{
    fontWeight:'bold'
  },
  container:{
    marginLeft:15,

  }

});

export default ResDetail;
