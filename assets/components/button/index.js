import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const ButtonStyled = (props) => {

    const {type, content} = props;
    const bgcolor = type == 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textcol = type == 'primary' ? '#FFFFFF' : '#171A20CC' 
    const onPress = props.onPress;

    return(
        // <View style={styles.container}>
            <Pressable 
                style={[styles.button, {backgroundColor: bgcolor}]}
                onPress={() => onPress()}
            >
                <Text style={[styles.text, {color: textcol}]}>{content}</Text>

            </Pressable>
        // </View>
    );
}

export default ButtonStyled;