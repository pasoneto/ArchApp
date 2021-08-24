import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import styles from './styles';

const ButtonData = ({text, color}) => {
  return (
    <TouchableOpacity style={[styles.button_data, {backgroundColor: color}]} >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonData;