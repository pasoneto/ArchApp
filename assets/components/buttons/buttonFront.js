import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native'

const ButtonStyled = (props) => {

    const navigation = useNavigation();
    const whereto = props.whereto
    const {type, content} = props;
    const bgcolor = type == 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textcol = type == 'primary' ? '#FFFFFF' : '#171A20CC' 


    return(
        // <View style={styles.container}>
            <Pressable 
                style={[styles.button, {backgroundColor: bgcolor}]}
                onPress={() => navigation.navigate(whereto)}
            >
                <Text style={[styles.text, {color: textcol}]}>{content}</Text>

            </Pressable>
        // </View>
    );
}

export default ButtonStyled;