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
    userData: {
        alignItems: 'center',
        color: 'red'
    },
    subtitle: {
        fontSize: 20,
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 2,
    },
    hellomessage: {
        fontSize: 15,
        color: 'black',
        textAlign: "left" 
    },
    image: {
        width: '100%', // Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        resizeMode: 'cover',
        position: 'absolute',
        flexWrap: 'wrap',
    },
    image2: {
        width: '100%', // Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        position: 'absolute',
        resizeMode: 'cover'
    },
    container: {  
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: "blue",
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
        margin: 20,
        padding: 5,
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "lightblue",
        // shadowOffset: {width: 10, height: 10},
        shadowOpacity: 0.9,
        shadowRadius: 2,
        shadowColor: 'black',
        overflow: 'hidden',
        elevation: 5,
        },
    buttons_wrap: {
        flex: 1,
        flexDirection: 'row',
        width: '104.5%',
        alignSelf: 'center',
        justifyContent: 'center',
        borderBottomColor: 'red',
   },
    buttoncontainer: {
        flex: 0.28,
    },
    render: {
        flex: 2,
        backgroundColor: "lightblue",
        width: "96%",
        alignSelf: "center",
        borderColor:'black',
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 5,
    },
    artistdata: {
        flex: 2,
        alignSelf: "center",
        alignItems: "center",
    },
    welcometitles: {
        flex: 0.8,
        paddingTop: 28,
        alignItems: "center",
        justifyContent: "center",
    },
    savebutton: {
        backgroundColor: "green",
        width: "30%",
        marginTop: 20
    },
    welcomemessage: {
        fontSize: 16,
        color: 'black',
        paddingBottom: 25,
        paddingTop: 15,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        // textShadowOffset: {width: -1, height: 1},
        // textShadowRadius: 1,
        justifyContent: 'center',
        textAlign: 'center'
    },
    TextInputArtist: {
        color: 'black',
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 5,
        textAlign: 'center',
        shadowColor: 'black',
        shadowOffset: {width: -1, height: 1},
        shadowRadius: 10,
        width: Dimensions.get("screen").width*0.8,
        height: 45,
        elevation: 3
      }, 
});

export default styles