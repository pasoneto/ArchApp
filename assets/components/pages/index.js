import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import ButtonStyled from '../button';
import styles from './styles';

const FrontPage = (props) => {

    const {name, CTA, image} = props.artist

    return(
      <View style={styles.page}>
      
        <ImageBackground 
          source={image}
          style={styles.image}
        />

        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{CTA}</Text>
        </View>
      
      {props.artist.first == 'true' && <ButtonStyled type= "primary" content={'Entrar'} onPress={() => console.warn("Login")}/>}
      {props.artist.first == 'true' && <ButtonStyled type= "secondary" content={'Registrar'} onPress={() => console.warn("Register")} />}
      
      </View>
    );
}

export default FrontPage;