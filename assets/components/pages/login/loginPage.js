import { Text, View, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import React, {FC, ReactElement, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import * as beFuncs from '../../../functions/backendFunctions.js';

const LogIn = (props) => {
    const image = require('../../../images/loginBG.jpg') 
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    return (

        <View style={styles.container}>
              
        <ImageBackground 
          source={image}
          style={styles.image}
        />

        <Text style={styles.title}>ArchVix</Text>
        <Text style={styles.subtitle}>O aplicativo da música capixaba</Text>

        <TextInput
            style={styles.TextInput}
            placeholder="Usuário"
            placeholderTextColor="#003f5c"
            autoCapitalize={"none"}
            onChangeText={(user) => setUser(user)}
        />
 
        <TextInput
            style={styles.TextInput}
            placeholder="Senha"
            placeholderTextColor="#003f5c"
            autoCapitalize={"none"}
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
        />

      <TouchableOpacity 
        style={styles.forgot_button}
        onPress={() => navigation.navigate("Reset")}>
            <Text style={styles.subtitle}>Esqueceu a senha?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity 
        style={styles.loginBtn}
        onPress={() => console.log(beFuncs.doUserLogIn(user, password, navigation))}>
            <Text style={styles.logintext}>Entrar</Text>
      </TouchableOpacity>
      
    </View>

    );
}

export default LogIn;
