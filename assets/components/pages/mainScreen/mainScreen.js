import React from 'react';
import {View, Text, Button, ImageBackground} from 'react-native';
import ButtonStyled from '../../buttons/buttonFront';
import CtaButton from '../../buttons/buttonCTA';
import styles from './styles';
import ArrowUp from '../../animations/arrow';

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
          {props.artist.first == 'false' && <CtaButton style={styles.CTAbutton} content={CTA} whereto={"Partituras"} name={name}/>}
          {props.artist.first == 'true' && <Text style={styles.subtitle}>{CTA}</Text>}
        </View>

      <View style={styles.wrap}>
      <ArrowUp/>
      {props.artist.first == 'true' && <ButtonStyled type= "primary" content={'Entrar'} whereto={'Login'}/>}
      {props.artist.first == 'true' && <ButtonStyled type= "secondary" content={'Registrar'} whereto={'Register'} />}
      </View>
      </View>
    );
}

export default FrontPage;
