import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native'

const CtaButton = (props) => {

    const navigation = useNavigation();
    const whereto = props.whereto
    const name = props.name;
    const {type, content} = props;
    const bgcolor = type == 'primary' ? '#transparent' : '#FFFFFFA6';
    const textcol = type == 'primary' ? '#red' : '#171A20CC' 

    return(
        // <View style={styles.container}>
            <Pressable 
                style={[styles.CTAbutton, {backgroundColor: bgcolor}]}
                onPress={() => navigation.navigate(whereto, {name: name})}
            >
                <Text style={[styles.text, {color: textcol}]}>{content}</Text>

            </Pressable>
        // </View>
    );
}

export default CtaButton;
