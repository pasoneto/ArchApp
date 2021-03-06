import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    titles: {
        marginTop: '45%',
        width: Dimensions.get('window').width,
        alignItems: 'center',
    },
    title: {
        fontSize: Dimensions.get('window').width*0.10,
        fontWeight: 'bold',
        color: "white",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 2,
    },
    subtitle: {
        fontSize: 20,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 2,
    },
    image: {
        width: '100%', // Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        resizeMode: 'cover',
        position: 'absolute',
        flexWrap: 'wrap',
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
        height: '100%'
      },
    TextInput: {
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 5,
        top: 10,
        textAlign: 'center',
        width: Dimensions.get("screen").width*0.8,
        height: 45,
      }, 
    forgot_button: {
        top: 150,
        alignSelf: 'center',
        fontWeight: 'bold',
      },
    logintext: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 20
      },
    loginBtn: {
        width: Dimensions.get("screen").width*0.3,
        borderRadius: 15,
        height: 40,
        top: 150,
        color: 'white',
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "black",
      },
});

export default styles