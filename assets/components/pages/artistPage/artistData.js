import React, {FC, useEffect, ReactElement, useState} from 'react';
import { ActivityIndicator } from 'react-native';
import Parse from 'parse/react-native';
import { TextInput, Modal, SafeAreaView, FlatList, Image, Alert, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import * as ImagePicker from 'expo-image-picker';

export const ArtistData = (props) => {

    const [name, setName] = useState('');
    const [genero, setGenero] = useState('');
    const [site, setSite] = useState('');
    const [update, setUpdate] = useState(false);
    const username = props.usernameUsuario
    const readResults = props.dadosUsuario
    const [saving, setSaving] = useState(false); 

    //Fetching only results that correspond to current user's username
    if(readResults !== []){
        var o = readResults.find(i => i.get('username') === username)
    }

    //Function to set state. Facilitates transitions between components
    const atualizar = function(){
        setUpdate(update !== true)
    };

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
    const doUserData = async function addPerson(name, genero, site, username, id, base64) {

        const nameValue = name;
        const generoValue = genero;
        const siteValue = site;
        const usernameValue = username;
        const idValue = id

        //Encodes chosen picture
        const parseFile = new Parse.File("nome", {base64});
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
                newPerson.set('picture', parseFile);
                //save it on Back4App Data Store
                await newPerson.save();
                setSaving(false)
                alert.Alert("Dados salvos :D")
                atualizar();
                } catch (error) {
                    console.log('Error saving new person: ', error);
                }
            readData();
            } else {
        Alert.alert("Por favor, preencha todos os dados")
    };
    }

  return (

  <View style={styles.artistdata}>

  <SafeAreaView style={{alignItems: "center"}}>

    {saving === true &&
      <ActivityIndicator style={styles.indicator} size="large" color ="#0000ff"/> }

    {o.get('picture') && saving === false &&
      <Image 
          style={styles.ProfilePic}
          source={ {uri: o.get('picture').url()} } 
          PlaceholderContent={<ActivityIndicator />}
      />
    }

    {!o.get('picture') && saving === false &&
      <Image 
          style={styles.ProfilePic}
          source={require('../../../images/user_image_placeholder.png')}
          PlaceholderContent={<ActivityIndicator />}
      />
    }

    {saving === false &&
        <Text>Nome</Text>}

    {saving === false &&
        <TextInput
                style={styles.TextInputArtist}
                placeholder={o.get('name')}
                placeholderTextColor="#fff"
                onChangeText={(name) => setName(name)}
            />}

    {saving === false &&
        <Text>Genero musical:</Text>}

    {saving === false &&
        <TextInput
            style={styles.TextInputArtist}
            placeholder={o.get('genero')}
            placeholderTextColor="#fff"
            onChangeText={(genero) => setGenero(genero)}
        />}

    {saving === false &&
        <Text>Site pessoal:</Text>}

    {saving === false &&
        <TextInput
            style={styles.TextInputArtist}
            placeholder={o.get('site')}
            placeholderTextColor="#fff"
            onChangeText={(site) => setSite(site)}
        />}

    {saving === false &&
        <Text>Foto de perfil:</Text>}

    {saving === false &&
        <TouchableOpacity style={styles.TextInputArtist}
            onPress={pickImage}>
          <Text style={styles.TextImage}>Escolha uma imagem</Text>
        </TouchableOpacity>}

    {saving === false &&
            <TouchableOpacity 
              style={styles.savebutton}
              onPress={() => {doUserData(name, genero, site, username, o.id, base64)} }>
              <Text style={styles.subtitle}>Salvar</Text>
            </TouchableOpacity>}


        </SafeAreaView>
      

      </View>


);
}
export default ArtistData;
