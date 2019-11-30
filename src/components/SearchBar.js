import React from 'react';
import {View,  TextInput, StyleSheet} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
const SearchBar = ({term, onTermChange, onTermSubmit})=>{

  return(
    <View style={styles.background}>
      <AntDesign  name="search1" style={styles.iconStyle} />
      <TextInput
      autoCapitalize='none'
      autoCorrect={false}
      style={styles.container}
      placeholder="Search Food"
      value={term}
      onChangeText={onTermChange}
      onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize:18,
    flex:1,
  },
  iconStyle:{
    fontSize:35,
    alignSelf:'center',
    marginHorizontal:15
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
  background: {
    backgroundColor: '#F0EEEE',
    height:50,
    borderRadius:8,
    marginHorizontal:15,
    marginVertical :10,
    flexDirection:'row'
  }

});

export default SearchBar;
