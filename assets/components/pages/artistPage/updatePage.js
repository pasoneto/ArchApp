import React, {FC, useEffect, ReactElement, useState} from 'react';
import { ActivityIndicator } from 'react-native';
import Parse from 'parse/react-native';
import { TextInput, Modal, SafeAreaView, FlatList, Image, Alert, Text, KeyboardAvoidingView, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import * as ImagePicker from 'expo-image-picker';

export const UpdatePage = ({route, navigation}) => {

    const [name, setName] = useState('');
    const [genero, setGenero] = useState('');
    const [site, setSite] = useState('');
    const [update, setUpdate] = useState(false);
    const [saving, setSaving] = useState(false); 

    //Function to set state. Facilitates transitions between components
    const atualizar = function(){
        setUpdate(update !== true)
    };
    console.log(route)
    const { o } = route.params

    //Asks permission for accessing mobile file storage
    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);

    //Picks image
    const [base64, setBase64] = useState(null);
    const pickImage = async function () {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        base64: true,
        maxHeight:  200,
        maxWidth:  200,
        quality: 1,
      });
      if (!result.cancelled) {
        setBase64(result.base64);
      }
    };

    //Saves data to current user
    const doUserData = async function addPerson(name, genero, site, username, id, base64 = null) {

        const nameValue = name;
        const generoValue = genero;
        const siteValue = site;
        const usernameValue = username;
        const idValue = id

        if(nameValue && generoValue && siteValue && usernameValue !== ''){
            // Verificando se usuario já tem dados
            try {
                setSaving(true)
                //create a new Parse Object instance
                const newPerson = new Parse.Object('UserData');
                newPerson.set('objectId', idValue);
                //define the attributes you want for your Object
                newPerson.set('name', nameValue);
                newPerson.set('genero', generoValue);
                newPerson.set('site', siteValue);
                newPerson.set('username', usernameValue);
                if(base64 !== null){
                  newPerson.set('picture', parseFile);
                }
                //save it on Back4App Data Store
                await newPerson.save();
                setSaving(false)
                Alert.alert("Dados salvos :D")
                atualizar();
                navigation.navigate("Welcome")
                } catch (error) {
                    console.log('Error saving new person: ', error);
                }
            } else {
        Alert.alert("Por favor, preencha todos os dados")
    };
    }

  return (

  <View style={styles.artistdata}>

  <SafeAreaView style={{alignItems: "center"}}>

  <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.inputArea}>

    {saving === true &&
      <ActivityIndicator style={styles.indicator} size="large" color ="#0000ff"/> }

    {!saving == true && 
    <TouchableOpacity onPress={pickImage}>
          <Image style={styles.ProfilePic} 
                source={ require('../../../images/user_image_placeholder.png') } 
                PlaceholderContent={<ActivityIndicator />}
          />
    </TouchableOpacity>}

    {!saving == true && 
        <TextInput
                style={styles.TextInputArtist}
                placeholder={"Nome"}
                placeholderTextColor="#fff"
                onChangeText={(name) => setName(name)}
        />
    }

    {!saving == true && 
        <TextInput
            style={styles.TextInputArtist}
            placeholder={"Genero musical"}
            placeholderTextColor="#fff"
            onChangeText={(genero) => setGenero(genero)}
        />
    }

    {!saving == true && 
        <TextInput
            style={styles.TextInputArtist}
            placeholder={"Site"}
            placeholderTextColor="#fff"
            onChangeText={(site) => setSite(site)}
        />
    }
    </KeyboardAvoidingView>

    {!saving == true && 
      <TouchableOpacity 
        style={styles.savebutton}
        onPress={() => {doUserData(name, genero, site, o.username, o.id, base64)} }>
        <Text style={styles.subtitle}>Salvar</Text>
      </TouchableOpacity>
    }

      </SafeAreaView>
      

      </View>


);
}
export default UpdatePage;
