import React, {FC, useEffect, ReactElement, useState} from 'react';
import Parse from 'parse/react-native';
import { TextInput, FlatList, Alert, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

export const ArtistData = () => {

    const [name, setName] = useState('');
    const [genero, setGenero] = useState('');
    const [spotify, setSpotify] = useState('');
    const [site, setSite] = useState('');
    const [readResults, setReadResults] = useState([]);
    const [username, setUsername] = useState('');
    const [update, setUpdate] = useState(false);

    useEffect(() => {
            async function getCurrentUser() {
            if (username === '') {
                const currentUser = await Parse.User.currentAsync();
                if (currentUser !== null) {
                    setUsername(currentUser.getUsername());
                    readData();
                }
            }
            }
            getCurrentUser();
    }, [username]);

    const readData = async function () {
        const parseQuery = new Parse.Query('UserData');
        try {
          let todos = await parseQuery.find();
          setReadResults(todos);
          return true;
        } catch (error) {
          Alert.alert('Error!', error.message);
          return false;
        }
      };

    if(readResults !== []){
        var o = readResults.find(i => i.get('username') === 'paso')
    }

    const atualizar = function(){
        setUpdate(update !== true)
    };

    // Funcionando. Agora preciso evitar que o mesmo sujeito guarde dois dados sobre ele mesmo.
    const doUserData = async function addPerson(name, genero, spotify, site, username, id) {

        const nameValue = name;
        const generoValue = genero;
        const spotifyValue = spotify;
        const siteValue = site;
        const usernameValue = username;
        const idValue = id

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
                //save it on Back4App Data Store
                await newPerson.save();
                Alert.alert("Dados salvos :D")
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

    <TouchableOpacity 
        style={styles.savebutton}
        onPress={() => atualizar()}>
        <Text style={styles.save_text}>Atualizar dados</Text>
    </TouchableOpacity>

    {readResults !== null &&
     readResults !== undefined &&
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
     />}

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

    <TouchableOpacity 
        style={styles.savebutton}
        onPress={() => doUserData(name, genero, spotify, site, username, o.id)}>
        <Text style={styles.save_text}>Salvar</Text>
    </TouchableOpacity>
    </View>

);
}
export default ArtistData;