import { Alert, StyleSheet, Dimensions, Text, View, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import Parse from 'parse/react-native';

const resetPassword = (props) => {
    const image = require('../../../images/loginBGreset.jpeg') 
    const [email, setEmail] = useState('');
    const navigation = useNavigation();

   const doUserPasswordReset = async function () {

    if(email === ''){
      Alert.alert("Por-favor, digite seu email.")
    }
    // Note that this value come from state variables linked to your text input
    const emailValue = email;
    return await Parse.User.requestPasswordReset(emailValue)
      .then(() => {
        // logIn returns the corresponding ParseUser object
        Alert.alert(
          'Feito!',
          `Por favoc, verifique ${email} para resetar sua senha.`,
        );
        navigation.navigate("Home");
        return true;
      })
      .catch((error) => {
        // Error can be caused by lack of Internet connection
        Alert.alert('Error!', error.message);
        return false;
      });
  };
   
    return (

        <View style={styles.container}>
              
        <ImageBackground 
          source={image}
          style={styles.image}
        />

        <Text style={styles.title}>ArchVix</Text>
        <Text style={styles.subtitle}>Rever senha</Text>

        <TextInput
            style={styles.TextInput}
            placeholder="email"
            placeholderTextColor="#003f5c"
            autoCapitalize={"none"}
            onChangeText={(email) => setEmail(email)}
        />
 
      <TouchableOpacity 
        style={styles.loginBtn}
        onPress={() => doUserPasswordReset()}>
            <Text style={styles.logintext}>Resetar</Text>
      </TouchableOpacity>
      
    </View>

    );
}

export default resetPassword;
