import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import ArrowUp from '../animations/arrow';

const IconButton = ({text, iconName, onPress}) => {
  return (
	<View style={{flexDirection: "row"}}>
				<Text style={{fontSize: 20}}>{text}</Text>
				<TouchableOpacity onPress={onPress}>
				<ArrowUp iconName={iconName} sizeIcon={25}/> 
				</TouchableOpacity>
			</View>
  );
};

export default IconButton;

