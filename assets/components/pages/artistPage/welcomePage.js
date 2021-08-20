import React, {FC, ReactElement} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import Parse from 'parse/react-native';
import {useNavigation} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';
import styles from './styles';
import HelloUser from './helloUser';
import ButtonData from '../../buttons/buttonData';

export const WelcomePage = () => {
  const navigation = useNavigation();

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
          <HelloUser/>
        </View>
        
        <View style={styles.buttoncontainer}>
          <View style={styles.buttons_wrap}>
            <ButtonData text={"Partituras"} color={"pink"}/>
            <ButtonData text={"Dados"} color={"pink"}/>
          </View>
        </View>

        <View style={styles.render}>
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