import React, { useEffect, useState} from 'react';
import Parse from 'parse/react-native';
import { TextInput, Alert, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import StyledPartList from '../../buttons/styledPartList';

export const ArtistPartitura = (props) => {

    const [name, setName] = useState('');
    const [composer, setComposer] = useState('');
    const [spotify, setSpotify] = useState('');

    // Beginning of read user data
    const [username, setUsername] = useState('');
    const [readResults, setReadResults] = useState([]);

    const readData = async function () {
        const parseQuery = new Parse.Query("UserScores");
        try {
          let todos = await parseQuery.find();
          setReadResults(todos);
          return true;
        } catch (error) {
          Alert.alert('Error!', error.message);
          return false;
        }
      };

    //Getting username
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

    if(readResults !== []){
        var userPartituras = readResults.filter((i)=>i.get('username') === username)
    }

    // var partituras = a.map((i)=>i.get('name'))
    // Save score info
    const doUserData = async function addPerson(name, composer, spotify, username, lengthParts) {

        const nameValue = name;
        const composerValue = composer;
        const spotifyValue = spotify;
        const usernameValue = username;

        if(lengthParts > 2){
          Alert.alert("Você já submeteu 3 partituras. Por enquanto, esse é o máximo que nossos servidores conseguem suportar por artista. Desculpe o transtorno.")
        } else{
        if(nameValue && composerValue && spotifyValue && usernameValue !== ''){
            // Verificando se usuario já tem dados
            try {
                //create a new Parse Object instance
                const newPerson = new Parse.Object('UserScores');
                //define the attributes you want for your Object
                newPerson.set('name', nameValue);
                newPerson.set('composer', composerValue);
                newPerson.set('spotify', spotifyValue);
                newPerson.set('username', usernameValue);
                //save it on Back4App Data Store
                await newPerson.save();
                // atualizar();
                } catch (error) {
                    console.log('Error saving new person: ', error);
                }
            readData();
            } else {
        Alert.alert("Por favor, preencha todos os dados")
    };
    }
  }

    const deleteTodo = async function (scoreId) {
        // Create a new todo parse object instance and set todo id
        const Todo = new Parse.Object('UserScores');
        console.log(scoreId)
        Todo.set('objectId', scoreId);
        // Implement refresh for list

        // .destroy should be called to delete a parse object
        try {
          await Todo.destroy();
          // Refresh todos list to remove this one
          // refresh
          readData();
          return true;
        } catch (error) {
          // Error can be caused by lack of Internet connection
          console.log('Error!', error.message);
          return false;
        };
      };


  const doPartDelete = (scoreId) =>
    Alert.alert(
      "Atenção!",
      "Você deseja deletar essa partitura?",
      [
        {
          text: "Sim",
          onPress: () => deleteTodo(scoreId)
        },
        {
          text: "Não",
          onPress: () => console.log("cancel pressed"),
          style: "cancel"
        }
      ]
    );

  return (
    <View style={styles.artistdata}>

        <Text 
            style={{textAlign: 'center', marginTop:10, width: 200}}>Suas partituras:
        </Text>

        <StyledPartList 
            object={userPartituras} 
            onPress={doPartDelete}
        />

        <Text 
            style={{textAlign: 'center', width: 200}}>
              Use os campos abaixo para adicionar mais partituras.
        </Text>

        <TextInput
            style={styles.TextInputArtist}
            placeholder="Nome da música"
            placeholderTextColor="#fff"
            onChangeText={(name) => setName(name)}
        />
 
        <TextInput
            style={styles.TextInputArtist}
            placeholder="Compositor(a)"
            placeholderTextColor="#fff"
            onChangeText={(composer) => setComposer(composer)}
        />

        <TextInput
            style={styles.TextInputArtist}
            placeholder="Link spotify"
            placeholderTextColor="#fff"
            onChangeText={(spotify) => setSpotify(spotify)}
        />

        <TextInput
            style={styles.TextInputArtist}
            placeholder="Arquivo"
            placeholderTextColor="#fff"
            onChangeText={(site) => setSite(site)}
        />

        <TouchableOpacity 
            style={styles.savebutton}
            onPress={() => doUserData(name, composer, spotify, username, userPartituras.length)}>
            <Text style={styles.subtitle}>Salvar</Text>
        </TouchableOpacity>

</View>

  );
};
export default ArtistPartitura;
