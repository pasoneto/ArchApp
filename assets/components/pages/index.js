import React from 'react';
import {View, Text, Button, ImageBackground} from 'react-native';
import ButtonStyled from '../button';
import CtaButton from '../button/buttonCTA';
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
          <CtaButton style={styles.CTAbutton} 
                  content={CTA}
                  whereto={"Partituras"}/>
        </View>
      
      {props.artist.first == 'true' && <ButtonStyled type= "primary" content={'Entrar'} whereto={'Login'}/>}
      {props.artist.first == 'true' && <ButtonStyled type= "secondary" content={'Registrar'} whereto={'Login'} />}
      
      </View>
    );
}

export default FrontPage;