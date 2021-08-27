import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import styles from './styles';

const ButtonData = ({text, color, onPress}) => {
  return (
    <TouchableOpacity style={[styles.button_data, {backgroundColor: color}]}
      onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonData;