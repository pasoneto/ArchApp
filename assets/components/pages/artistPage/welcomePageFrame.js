import React from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';

const WelcomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Archvix</Text>
      </View>
      <View style={styles.buttonRow}>
        <View style={styles.buttonLeft}>
          <TouchableOpacity style={styles.buttonText}>
            <Text>Oi</Text>
          </TouchableOpacity>
        </View>
          <View style={styles.buttonRight}>
            <TouchableOpacity style={styles.buttonText}>
              <Text>Oi</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style={styles.body}>
        <View style={styles.circle}>
          {/* photo here */}
        </View>
        <View style={styles.textInputArea}>
          <TextInput style={styles.textInput} placeholder="Nome"/>
          <TextInput style={styles.textInput} placeholder="Genero musical"/>
          <TextInput style={styles.textInput} placeholder="Spotify"/>
        </View>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={{color: 'white'}}>Save</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={{color: 'white'}}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  header: {
    flex: 1.5,
    alignItems: 'center',
    backgroundColor: 'indigo',
  },
  body: {
    flex: 5,
    width: '90%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: 'blue',
    borderColor: 'black',
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 3,
  },
  footer:{
    flex: 1,
    backgroundColor: 'indigo',
  },
  bottomBody: {
    flex: 0.1,
  },
  buttonRow: {
    flex: 0.5,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    margin: 0,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  buttonLeft:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'purple',
    borderWidth: 3.5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  buttonRight:{
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    borderWidth: 3,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  buttonText: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  circle: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    top: 20,
    borderRadius: 100,
    backgroundColor: 'yellow'
  },
  textInputArea: {
    width: '90%',
    height: '50%',
    alignSelf: 'center',
    alignItems: 'center',
    top: 60,
    backgroundColor: 'yellow'
  },
  textInput: {
    height: 40,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10, 
  },
  saveButton:{
    position: 'absolute',
    backgroundColor: 'red',
    bottom: 10,
    alignSelf: 'center',
    alignItems: 'center',
    width: '30%',
    borderRadius: 30,
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  logoutButton:{
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 50,
    alignItems: 'center',
    width: '30%',
    borderRadius: 30,
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  title: {
    top: 60,
    fontSize: Dimensions.get('window').width*0.10,
    fontWeight: 'bold',
    color: "white",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2,
  }
});