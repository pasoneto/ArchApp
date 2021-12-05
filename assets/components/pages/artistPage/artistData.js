import React, {FC, useEffect, ReactElement, useState} from 'react';
import Parse from 'parse/react-native';
import { TextInput, Modal, FlatList, Image, Alert, Text, TouchableOpacity, View} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';

export const ArtistData = (props) => {

    const [name, setName] = useState('');
    const [genero, setGenero] = useState('');
    const [spotify, setSpotify] = useState('');
    const [site, setSite] = useState('');
    const [update, setUpdate] = useState(false);
    const username = props.usernameUsuario
    const readResults = props.dadosUsuario

  /////////////////////////////////////
  // TRANSFER THIS TO welcomePage.js //
  /////////////////////////////////////
  ////////////////////////////////////////////
  // END OF TRANSFER THIS TO welcomePage.js //
  ////////////////////////////////////////////

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
    const doUserData = async function addPerson(name, genero, spotify, site, username, id, base64) {

        const nameValue = name;
        const generoValue = genero;
        const spotifyValue = spotify;
        const siteValue = site;
        const usernameValue = username;
        const idValue = id

        //Encodes chosen picture
        const parseFile = new Parse.File("nome", {base64});

        if(nameValue && generoValue && spotifyValue && siteValue && usernameValue !== ''){
            // Verificando se usuario já tem dados
            try {
                //create a new Parse Object instance
                const newPerson = new Parse.Object('UserData');
                newPerson.set('objectId', idValue);
                //define the attributes you want for your Object
                newPerson.set('name', nameValue);
                newPerson.set('genero', generoValue);
                newPerson.set('spotify', spotifyValue);
                newPerson.set('site', siteValue);
                newPerson.set('username', usernameValue);
                newPerson.set('picture', parseFile);

                Alert.alert("Salvando os dados...")
                //save it on Back4App Data Store
                await newPerson.save();
                Alert.alert("Dados salvos :D")
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

    <View style={{flex: 0.7, alignItems: "center"}}>
    <TouchableOpacity 
        style={styles.updatebutton}
        onPress={() => atualizar()}>
        <Text style={styles.save_text}>Atualizar dados</Text>
    </TouchableOpacity>

    {readResults !== null &&
     readResults !== undefined &&
     update == false &&
     <View style={styles.dadosWrap}>
      <FlatList
        data={readResults}
        renderItem={({item}) => { if (item.get('username') == username) 
        { return <View style={styles.info_wrapper}>
                <View >
                 <Text style={styles.userData2}> Nome:</Text>
                 <Text style={styles.userData2}> Genero:</Text>
                 <Text style={styles.userData2}> Link spotify:</Text>
                 <Text style={styles.userData2}> Site:</Text>
                </View>
                
                <View>
                 <Text style={styles.userData}> {item.get('name')} </Text>
                 <Text style={styles.userData}> {item.get('genero')}</Text>
                 <Text style={styles.userData}> {item.get('spotify')}</Text>
                 <Text style={styles.userData}> {item.get('site')}</Text>
                </View>

	
                </View>
                 }}
        }
     />
     </View>
     }
    </View>
    
    <View style={{flex: 1}}>
    {readResults !== null &&
     readResults !== undefined &&
     update == false &&
     <View style={styles.dadosWrap}>
      <FlatList
        data={readResults}
        ListEmptyComponent={<Text>Carregando imagem...</Text>}
        renderItem={({item}) => { if (item.get('username') == username)
	       {if (item.get('picture') !== undefined) {
          return  <Image 
            style={styles.ProfilePic}
            source={ {uri: item.get('picture').url()} } />}
          else {
          return <Image 
            style={styles.ProfilePic}
            source={require("/Users/pdealcan/Documents/github/Archvix/assets/images/user_image_placeholder.png")} />
         }}
      }}
      />
    </View>
    }
    </View>

  <View style={{alignItems: "center"}}>

   {update == true &&
    <Text>Adicione suas informações abaixo:</Text>
   }

   {update == true &&
        <TextInput
            style={styles.TextInputArtist}
            placeholder="Nome"
            placeholderTextColor="#003f5c"
            onChangeText={(name) => setName(name)}
        />
    } 

   {update == true &&
        <TextInput
            style={styles.TextInputArtist}
            placeholder="Genero musical"
            placeholderTextColor="#003f5c"
            onChangeText={(genero) => setGenero(genero)}
        />
    }

   {update == true &&
        <TextInput
            style={styles.TextInputArtist}
            placeholder="Link spotify"
            placeholderTextColor="#003f5c"
            onChangeText={(spotify) => setSpotify(spotify)}
        />
    }

   {update == true &&
        <TextInput
            style={styles.TextInputArtist}
            placeholder="Site pessoal"
            placeholderTextColor="#003f5c"
            onChangeText={(site) => setSite(site)}
        />
    }

    {update == true &&
        <TouchableOpacity style={styles.TextInputArtist}
            onPress={pickImage}>
            <Text style={styles.TextImage}>Escolha uma imagem</Text>
        </TouchableOpacity>
    }

    {update == true &&
    <TouchableOpacity 
        style={styles.savebutton}
        onPress={() => {doUserData(name, genero, spotify, site, username, o.id, base64)} }>
        <Text style={styles.save_text}>Salvar</Text>
    </TouchableOpacity>
    }
    </View>

  </View>
);
}
export default ArtistData;