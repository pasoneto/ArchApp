import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import styles from './styles';
import { WebView } from 'react-native-webview';

const Partituras= (props) => {

    const {name, image, song, partitura, type} = props.artist

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

      {type !== "image" &&
        <WebView style={styles.container} source={{ html: partitura}} />
      } 

      {type === "image" &&
        <Image style={styles.container2} source={partitura} />
      } 
        </View>
    );
}

export default Partituras;

