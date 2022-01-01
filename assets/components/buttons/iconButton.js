import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import ArrowUp from '../animations/arrow';

const IconButton = ({text, iconName, onPress}) => {
  return (
	<View style={{flexDirection: "row"}}>
				<TouchableOpacity onPress={onPress}>
				<ArrowUp iconName={iconName} size={30}/> 
				</TouchableOpacity>
				<Text style={{marginLeft: 50}}>{text}</Text>
			</View>
  );
};

export default IconButton;

