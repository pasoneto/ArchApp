import React, {useEffect, useState} from 'react';
import { StyleSheet, Dimensions, Text, View, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import addPerson from "../../auth.js"

function LogIn(props) {

    const image = require('../../../images/loginBG.jpg') 
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    
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
            onChangeText={(user) => setUser(user)}
        />
 
        <TextInput
            style={styles.TextInput}
            placeholder="Senha"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
        />

        <TextInput
            style={styles.TextInput}
            placeholder="Repita a senha"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password2) => setPassword2(password2)}
        />
        
      <TouchableOpacity 
        style={styles.forgot_button}
        onPress={() => console.warn("Esqueceu pae")}>
            <Text style={styles.subtitle}>Esqueceu a senha?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity 
        style={styles.loginBtn}
        onPress={() => addPerson(user, password, password2)}>
            <Text style={styles.logintext}>Entrar</Text>
      </TouchableOpacity>
      
    </View>

    );
}

export default LogIn;
