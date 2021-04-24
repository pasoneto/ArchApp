import React, {useState} from 'react';
import { StyleSheet, Dimensions, Text, View, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';

function LogIn(props) {

    const image = require('../../images/loginBG.jpg') 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
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
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
        />
 
        <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
        />
        
      <TouchableOpacity 
        style={styles.forgot_button}
        onPress={() => console.warn("Esqueceu pae")}>
            <Text style={styles.subtitle}>Esqueceu a senha?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity 
        style={styles.loginBtn}
        onPress={() => console.warn([email, password])}>
            <Text style={styles.logintext}>Entrar</Text>
      </TouchableOpacity>
      
 

    </View>

    );
}

export default LogIn;