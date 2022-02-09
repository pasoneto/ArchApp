import React, { useRef } from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native'
import { Animated, Text, View, Pressable} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

const ButtonOverlay = (props) => {

    const fadeAnim = useRef(new Animated.Value(0.6)).current  // Initial value for opacity: 0
    const {onPress, content, styleButton} = props

    React.useEffect(() => {
        Animated.loop(
        Animated.sequence([
            // Animated.delay(0),
            Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true, 
            }),
            Animated.timing(fadeAnim, {
            toValue: 0.3,
            duration: 500,
            useNativeDriver: true, 
            })
        ]),
        ).start();
    }, [fadeAnim])

    return(
            <TouchableOpacity 
                style={styleButton}
                onPress={onPress}
            >
            <Animated.View style={{opacity:fadeAnim}}>
                <Text style={{alignSelf: 'center'}}>{content}</Text>
            </Animated.View>
            </TouchableOpacity>
    );
}

export default ButtonOverlay;