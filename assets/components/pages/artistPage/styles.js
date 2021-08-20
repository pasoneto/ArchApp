import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    titles: {
        marginTop: '45%',
        width: Dimensions.get('window').width,
        alignItems: 'center',
        backgroundColor: "lightblue"
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
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "blue",
        justifyContent: "flex-start"
      },
    container2: {
        flex: 1
    },
    TextInput: {
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 5,
        top: 150,
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        width: Dimensions.get("screen").width*0.8,
        height: 45,
      }, 
    logintext: {
        color: 'black',
        alignSelf: 'center',
        fontSize: 20
      },
   logoutBtn: {
        borderRadius: 15,
        width: "40%",
        color: 'white',
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "lightblue",
    },
    buttons_wrap: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
   },
    buttoncontainer: {
        flex: 0.28,
    },
    render: {
        flex: 2,
        backgroundColor: "red",
        width: "97%",
        alignSelf: "center"
    },
    logoutcontainer: {
        flex: 0.1,
        padding: 20,
        alignItems: "center",
        backgroundColor: "white"
    },
    welcometitles: {
        flex: 0.07,
        alignItems: "center",
        padding: 50,
        backgroundColor: "lightblue"
    },
});

export default styles