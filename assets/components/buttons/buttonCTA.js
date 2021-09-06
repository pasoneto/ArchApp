import React, { useRef } from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native'
import { Animated, Text, View, Pressable} from "react-native";

const CtaButton = (props) => {

    const navigation = useNavigation();
    const whereto = props.whereto
    const name = props.name;
    const {type, content} = props;
    const bgcolor = type == 'primary' ? '#transparent' : '#FFFFFFA6';
    const textcol = type == 'primary' ? '#red' : '#171A20CC' 

    const fadeAnim = useRef(new Animated.Value(0.6)).current  // Initial value for opacity: 0

    React.useEffect(() => {
        Animated.loop(
        Animated.sequence([
            // Animated.delay(0),
            Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 700,
            useNativeDriver: true, 
            }),
            Animated.timing(fadeAnim, {
            toValue: 0.6,
            duration: 700,
            useNativeDriver: true, 
            })
        ]),
        ).start();
    }, [fadeAnim])

    return(
            <Pressable 
                style={{backgroundColor: bgcolor}}
                onPress={() => navigation.navigate(whereto, {name: name})}
            >
            <Animated.View style={{opacity:fadeAnim}}>
                <Text style={[styles.text, {color: textcol}]}>{content}</Text>
            </Animated.View>
            </Pressable>
    );
}

export default CtaButton;
