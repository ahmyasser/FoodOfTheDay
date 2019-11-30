import React, {useState} from 'react';
import {View,  Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../apis/yelp';
import useResaults from '../hooks/useResaults';
import ResaultLists from '../components/ResaultLists';

const SearchScreen =()=>{

  const [term, onTermChange]= useState("");
  const [res, errorMsg, SearchApi]= useResaults();

const filterRes =(price) => {
  return res.filter(r => {
    return r.price && (r.price.length  === price);
  });
};

  return(
    <>
    <SearchBar
      term={term}
      onTermChange={onTermChange}
      onTermSubmit={() =>SearchApi(term)}
      />

      {errorMsg? <Text>{errorMsg}</Text>: null}
      <ScrollView>
        <ResaultLists title={'Cost Effictive'} res={filterRes(1)} />
        <ResaultLists title={'Bit pricier'} res={filterRes(2)} />
        <ResaultLists title={'Big Spender'} res={filterRes(3)} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
});

export default SearchScreen;
