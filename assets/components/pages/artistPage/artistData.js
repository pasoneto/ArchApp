import React, {FC, useEffect, ReactElement, useState} from 'react';
import { ActivityIndicator } from 'react-native';
import Parse from 'parse/react-native';
import { Overlay, Button } from 'react-native-elements';
import { TextInput, Modal, SafeAreaView, FlatList, Image, Alert, Text, KeyboardAvoidingView, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import * as ImagePicker from 'expo-image-picker';
import ButtonOverlay from '../../buttons/buttonOverlay';
import FrontPage from '../mainScreen/mainScreen';

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
    const [image, setImage] = useState(null);
    const [base64, setBase64] = useState(null);

    const pickImage = async function () {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        base64: true,
        // maxHeight:  200,
        // maxWidth:  200,
        quality: 1,
      });
      if (!result.cancelled) {
        setBase64(result.base64);
        setImage(result.uri);
        Alert.alert("Atenção!", "Você escolheu uma foto, mas ela ainda não foi salva no seu perfil. Verifique se o enquadramento da foto está boa, pois é assim que ela aparecerá no seu perfil público. Quando terminar, aperte o botão salvar.")
      }
    };

    //Saves data to current user
    const doUserData = async function addPerson(name, genero, site, username, id) {

        const nameValue = name;
        const generoValue = genero;
        const siteValue = site;
        const usernameValue = username;
        const idValue = id
        var parseFile;

        try{
          parseFile = new Parse.File("nome", {base64});
        } catch(e){
          console.log(e)
        }

            // Verificando se usuario já tem dados
            try {
                setSaving(true)
                //create a new Parse Object instance
                const newPerson = new Parse.Object('UserData');
                newPerson.set('objectId', idValue);
                //define the attributes you want for your Object
                if(nameValue){
                  newPerson.set('name', nameValue);
                }
                if(generoValue){
                  newPerson.set('genero', generoValue);
                }
                if(siteValue){
                  newPerson.set('site', siteValue);
                }
                if(usernameValue){
                  newPerson.set('username', usernameValue);
                }
                if(parseFile !== null){
                  newPerson.set('picture', parseFile);
                }
                // newPerson.set('picture', parseFile);
                //save it on Back4App Data Store
                await newPerson.save();
                setSaving(false)
                Alert.alert("Dados salvos :D")
                atualizar();
                } catch (error) {
                    console.log('Error saving new person: ', error);
                }
      };

      const [visible, setVisible] = useState(false);

      const toggleOverlay = () => {
        setVisible(!visible);
      };
    
    const artist = {
        "CTA": "Partituras",
        "first": "false",
        "image": {uri: image},
        "name": o.get('name'),
        "partitura": "<iframe width=\"100%\" height=1500 src=\"https://musescore.com/user/36162467/scores/6360770/embed\" frameborder=\"0\" fullscreen\"></iframe>",
      }

  return (

  <View style={styles.artistdata}>

  <View style={{alignItems: "center"}}>

  <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : "height"} 
    style={styles.inputArea}>

    {saving === true &&
      <ActivityIndicator 
        style={styles.indicator} 
        size="large" 
        color ="#0000ff"/> }

    {o.get('picture') && !image && saving === false &&
    <TouchableOpacity onPress={pickImage}>
          <Image style={styles.ProfilePic} 
                source={ {uri: o.get('picture').url()} } 
                PlaceholderContent={<ActivityIndicator />}
          />
    </TouchableOpacity>
    }

    {image && saving === false &&
    <TouchableOpacity onPress={pickImage}>
          <Image style={styles.ProfilePic} 
                source={ { uri: image } } 
                PlaceholderContent={<ActivityIndicator />}
          />
    </TouchableOpacity>
    }

    {image && saving === false &&
      <ButtonOverlay 
        onPress={toggleOverlay}
        content={"Verificar ajuste da foto"}
        styleButton={styles.overlayButton}/>
    }

    {!o.get('picture') && !image && saving === false &&
    <TouchableOpacity onPress={pickImage}>
      <Image 
          style={styles.ProfilePic}
          source={require('../../../images/user_image_placeholder.png')}
          PlaceholderContent={<ActivityIndicator />}
      />
    </TouchableOpacity>
    }

    {saving === false &&
      <Text>Nome</Text>
    }
    {saving === false &&
        <TextInput
                style={styles.TextInputArtist}
                placeholder={o.get('name')}
                placeholderTextColor="#fff"
                onChangeText={(name) => setName(name)}
            />}

    {saving === false &&
      <Text>Genero musical</Text>
    }
    {saving === false &&
        <TextInput
            style={styles.TextInputArtist}
            placeholder={o.get('genero')}
            placeholderTextColor="#fff"
            onChangeText={(genero) => setGenero(genero)}
        />}

    {saving === false &&
      <Text>Spotify/Youtube</Text>
    }
    {saving === false &&
        <TextInput
            style={styles.TextInputArtist}
            placeholder={o.get('site')}
            placeholderTextColor="#fff"
            onChangeText={(site) => setSite(site)}
        />}
  </KeyboardAvoidingView>

    {saving === false &&
            <TouchableOpacity 
              style={styles.savebutton}
              onPress={() => {doUserData(name, genero, site, username, o.id)} }>
              <Text style={styles.subtitle}>Salvar</Text>
            </TouchableOpacity>}

    <Overlay isVisible={visible} fullScreen={false}>
        <View style={{flex: 1, marginBottom: -10}}>
        <FrontPage artist={artist}/>
        <Button title="Ok" onPress={toggleOverlay}/>
        </View>
    </Overlay>
    
        </View>
      

      </View>


);
}
export default ArtistData;
