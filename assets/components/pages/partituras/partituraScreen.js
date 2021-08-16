import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import { WebView } from 'react-native-webview';

const Partituras= (props) => {

    const {name, image, song, partitura} = props.artist

    return(
        <View style={styles.page}>

        <ImageBackground 
          source={image}
          style={styles.image}
        />


      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{song}</Text>
      </View> 
        
        <WebView style={styles.container} source={{ html: partitura}} />
        </View>
    );
}

export default Partituras;

