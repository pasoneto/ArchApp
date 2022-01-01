import React, {FC, useEffect, ReactElement, useState} from 'react';
import Parse from 'parse/react-native';
import { TextInput, Image, StyleSheet, FlatList, Alert, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import ArrowUp from '../../animations/arrow';
import IconButton from '../../buttons/iconButton'
import { set } from 'react-native-reanimated';


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
        var numparts = userPartituras.length
    }

  const deleteTodo = async function (todoId) {
    // Create a new todo parse object instance and set todo id
    const Todo = new Parse.Object('UserScores');
    Todo.set('objectId', todoId);
    // .destroy should be called to delete a parse object
    try {
      await Todo.destroy();
      // Refresh todos list to remove this one
      readData();
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      console.log('Error!', error.message);
      return false;
    };
  };

    const callDelete = (todoId) =>
        //function to make two option alert
        Alert.alert(
           //This is title
          'Atenção!',
            //This is body text
          'Você estâ prestes a deleter esta música.',
          [
            {text: 'Cancelar', onPress: () => console.log('No Pressed'), style: 'cancel'},
            {text: 'Prosseguir', onPress: () => deleteTodo(todoId)},
          ],
          { cancelable: false }
          //on clicking out side, Alert will not dismiss
        );

    // Save score info
    const doUserData = async function addPerson(name, composer, spotify, username, numparts) {

        const nameValue = name;
        const composerValue = composer;
        const spotifyValue = spotify;
        const usernameValue = username;

        if(numparts < 5){ //Limit amount of scores per musician
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
        } else{
            Alert.alert("Você já tem 5 partituras registradas. Por enquanto, esse é o máximo que nossos servidores aguentam. Desculpe o transtorno :(")
        }
    }


  return (

      <View style={styles.artistdata}>
      
      <View style={styles.userPartRender}>
      <Text>Suas partituras. Clique para atualizar ou exluir.</Text>

        <FlatList style={styles.flatContainer}
            data={userPartituras}
            renderItem={({item}) => 
                <TouchableOpacity style={styles.item_scores} >
                <IconButton iconName={'trash-can'} text={item.get('name')} onPress={()=>callDelete(item.id)}/>
                </TouchableOpacity>}
            keyExtractor={(item, index) => index.toString()}
        />
    </View>

    <View style={styles.partUpdateRender}>
      <Text>Adicione/atualize suas partituras.</Text>

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
            onPress={() => doUserData(name, composer, spotify, username, numparts)}>
            <Text style={styles.subtitle}>Salvar</Text>
        </TouchableOpacity>
</View>

  </View>
  );
};
export default ArtistPartitura;
