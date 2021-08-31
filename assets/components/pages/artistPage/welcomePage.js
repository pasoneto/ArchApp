import React, {FC, useState, ReactElement} from 'react';
import {Alert, Text, ImageBackground, TextInput, TouchableOpacity, View} from 'react-native';
import Parse from 'parse/react-native';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';
import styles from './styles';
import UserName from './userName';
import ButtonData from '../../buttons/buttonData';
import ArtistData from './artistData';
import ArtistPartitura from './artistPartiture';

export const WelcomePage = (props) => {
  const navigation = useNavigation();
  // console.log(props)

  const image = require('../../../images/loginBG.jpg') 
  const doUserLogOut = async function () {
    return await Parse.User.logOut()
      .then(async () => {
        // To verify that current user is now empty, currentAsync can be used
        const currentUser = await Parse.User.currentAsync();
        if (currentUser === null) {
          Alert.alert('Até a próxima!');
        }
        // Navigation dispatch calls a navigation action, and popToTop will take
        // the user back to the very first screen of the stack
        navigation.dispatch(StackActions.popToTop());
        return true;
      })
      .catch((error) => {
        Alert.alert('Error!', error.message);
        return false;
      });
  };

  const [valor, setValor] = useState(true); 
  const [color1, setColor1] = useState("blue");
  const [color2, setColor2] = useState("lightblue");

  return (
    <View style={styles.container}>
        
        <ImageBackground source={image} style={styles.image2}/>

        <View style={styles.welcometitles}>
          <Text style={styles.title}>ArchVix</Text>
          <Text style={styles.subtitle}>O aplicativo da música capixaba</Text>
        </View>
        
        <View style={styles.buttoncontainer}>
          <View style={styles.buttons_wrap}>
            <ButtonData 
              text={"Partituras"} 
              color={color1} 
              onPress={() => {setValor(true); setColor1("blue"); setColor2("lightblue")} }
            />
            <ButtonData 
              text={"Dados"}
              color={color2}
              onPress={() => {setValor(false); setColor1("lightblue"); setColor2("blue")}}
            />
          </View>
        </View>

{!valor &&
        <View style={styles.render}>
          <Text style={styles.welcomemessage}> 
            Adicione suas informaçoes pessoais.
          </Text>
          <ArtistData style={styles.artistdata}/>
        </View>
}

{valor &&
        <View style={styles.render}>
          <Text style={styles.welcomemessage}> 
            Adicione a partitura e informações sobre a música. 
          </Text>
          <ArtistPartitura/>
        </View>
}
          <TouchableOpacity style={styles.logoutBtn} onPress={() => doUserLogOut()}>
            <View >
              <Text style={styles.logintext} >{'Logout'}</Text>
            </View>
          </TouchableOpacity>
    </View>
  );
};
export default WelcomePage;