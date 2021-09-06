import React, { useState, useRef, Component } from 'react';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { Animated, Text, View, Button} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ArrowUp = (props) => {

    const fadeAnim = useRef(new Animated.Value(0.5)).current  // Initial value for opacity: 0

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
            toValue: 0.5,
            duration: 700,
            useNativeDriver: true, 
            })
        ]),
        ).start();
    }, [fadeAnim])

    return(
    
        <View>
            <Animated.View style={{opacity:fadeAnim}}>
                <MaterialCommunityIcons style={styles.icon} name="chevron-double-up" size={40} color="white" />
            </Animated.View>
        </View>

    );
}

export default ArrowUp;
