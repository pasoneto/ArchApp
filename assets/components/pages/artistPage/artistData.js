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

    useEffect(() => {
            async function getCurrentUser() {
            if (username === '') {
                const currentUser = await Parse.User.currentAsync();
                if (currentUser !== null) {
                setUsername(currentUser.getUsername());
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
          console.log(todos)
          return true;
        } catch (error) {
          Alert.alert('Error!', error.message);
          return false;
        }
      };

// Funcionando. Agora preciso evitar que o mesmo sujeito guarde dois dados sobre ele mesmo.

    const doUserData = async function addPerson(name, genero, spotify, site, username) {

        const nameValue = name;
        const generoValue = genero;
        const spotifyValue = spotify;
        const siteValue = site;
        const usernameValue = username;

        try {
            //create a new Parse Object instance
            const newPerson = new Parse.Object('UserData');
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
        }
    



  return (
    <View style={styles.artistdata}>
    {readResults !== null &&
     readResults !== undefined &&
      <FlatList
        data={readResults}
        renderItem={({item}) => { if (item.get('username') == username) 
        { return <Text style={styles.userData}>
                        Nome:{item.get('name')},{"\n"}
                        Genero:{item.get('genero')},{"\n"}
                        Link spotify:{item.get('spotify')},{"\n"}
                        Site:{item.get('site')}
                 </Text>}}
        }
     />}
        <TextInput
            style={styles.TextInputArtist}
            placeholder="Nome"
            placeholderTextColor="#003f5c"
            onChangeText={(name) => setName(name)}
        />
 
        <TextInput
            style={styles.TextInputArtist}
            placeholder="Genero musical"
            placeholderTextColor="#003f5c"
            onChangeText={(genero) => setGenero(genero)}
        />

        <TextInput
            style={styles.TextInputArtist}
            placeholder="Link spotify"
            placeholderTextColor="#003f5c"
            onChangeText={(spotify) => setSpotify(spotify)}
        />

        <TextInput
            style={styles.TextInputArtist}
            placeholder="Site pessoal"
            placeholderTextColor="#003f5c"
            onChangeText={(site) => setSite(site)}
        />

        <TouchableOpacity 
            style={styles.savebutton}
            onPress={() => doUserData(name, genero, spotify, site, username)}>
            <Text style={styles.subtitle}>Salvar</Text>
        </TouchableOpacity>


    </View>
  );
};
export default ArtistData;