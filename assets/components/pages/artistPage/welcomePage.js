import React, {FC, ReactElement} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Parse from 'parse/react-native';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';
import styles from './styles';
import UserName from './userName';
import ButtonData from '../../buttons/buttonData';
import ArtistData from './artistData';

export const WelcomePage = (props) => {
  const navigation = useNavigation();
  console.log(props)
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

  return (
    <View style={styles.container}>
        
        <View style={styles.welcometitles}>
          <Text style={styles.title}>ArchVix</Text>
          <Text style={styles.subtitle}>O aplicativo da música capixaba</Text>
        </View>
        
        <View style={styles.buttoncontainer}>
          <View style={styles.buttons_wrap}>
            <ButtonData text={"Partituras"} color={"pink"}/>
            <ButtonData text={"Dados"} color={"pink"}/>
          </View>
        </View>

        <View style={styles.render}>
          <Text style={styles.welcomemessage}>Olá, <UserName/>,
            Aqui você pode gerenciar suas informaçoes pessoais e partituras
          </Text>
        
        {<ArtistData style={styles.artistdata}/>}

	        <TouchableOpacity 
            style={styles.savebutton}
            onPress={() => console.warn("Salvar dados")}>
            <Text style={styles.subtitle}>Salvar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.logoutcontainer}>
          <TouchableOpacity style={styles.logoutBtn} onPress={() => doUserLogOut()}>
            <View >
              <Text style={styles.logintext} >{'Logout'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      

    </View>
  );
};
export default WelcomePage;