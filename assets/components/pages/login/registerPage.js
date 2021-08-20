import React, {useEffect, useState} from 'react';
import { StyleSheet, Dimensions, Text, View, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import doUserRegistration from "../../backend/register.js"

function registerPage(props) {

    const image = require('../../../images/loginBG.jpg') 
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    
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
            autoCapitalize={"none"}
            placeholderTextColor="#003f5c"
            onChangeText={(user) => setUser(user)}
        />
 
        <TextInput
            style={styles.TextInput}
            placeholder="Senha"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            autoCapitalize={"none"}
            onChangeText={(password) => setPassword(password)}
        />

        <TextInput
            style={styles.TextInput}
            placeholder="E-mail"
            placeholderTextColor="#003f5c"
            autoCapitalize={"none"}
            onChangeText={(email) => setEmail(email)}
        />
        
      <TouchableOpacity 
        style={styles.loginBtn}
        onPress={() => doUserRegistration(user, password, email)}>
            <Text style={styles.logintext}>Registrar</Text>
      </TouchableOpacity>
      
    </View>

    );
}

export default registerPage;
