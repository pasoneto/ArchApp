import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

const IconButton = ({text, iconName, onPress, sizeIcon }) => {
  return (
	<View style={{flexDirection: "row"}}>
				<Text style={{fontSize: 20}}>{text}</Text>
				<TouchableOpacity onPress={onPress}>
                	<MaterialCommunityIcons style={styles.icon} name={iconName} size={sizeIcon} color="white" />
				</TouchableOpacity>
			</View>
  );
};

export default IconButton;