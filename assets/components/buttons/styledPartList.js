import React, { useState } from 'react';
import {Text, TouchableOpacity, View, FlatList } from 'react-native';
import IconButton from './iconButton';
import styles from './styles'

const StyledPartList = ({object, onPress}) => {


  return (
      
    <View style={styles.boxPart}>
        <FlatList
            data={object}
            renderItem={({item}) => 

              <IconButton style={styles.partList} 
                    text={item.get('name')} 
                    iconName="trash-can" 
                    sizeIcon={20}
                    onPress={()=>onPress(item.id)}/>}

            keyExtractor={(item, index) => index.toString()}
        />
    </View>

  );
};

export default StyledPartList;





