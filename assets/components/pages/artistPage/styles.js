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
        width: Dimensions.get('screen').width*0.65,
        color: "#fff",
        textShadowColor: "black",
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 0.5,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    userData2: {
        alignItems: 'center',
        width: Dimensions.get('screen').width*0.23,
        textAlign: 'left',
        textShadowColor: "white",
        textShadowRadius: 0.2,
        fontSize: 15,
        color: '#3b3a30'
    },
    info_wrapper: {
       flex: 1, 
       marginTop: 2,
       backgroundColor: "#b2c2bf",
       borderColor: "#3b3a30",
       borderWidth: 2,
       borderRadius: 4,
       flexDirection: 'row',
    },
    subtitle: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 2,
    },
    save_text: {
        fontSize: 20,
        color: 'blue',
        textAlign: 'center',
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
      },
    TextInput: {
        color: '#3b3a30',
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
        color: '#fff',
        alignSelf: 'center',
        fontSize: 20,
      },
   escolherImagem: {
        color: 'blue',
        textAlign: 'center',
        margin: 10, 
   },
   logoutBtn: {
        borderRadius: 15,
        width: "40%",
        margin: 20,
        padding: 5,
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "#3b3a30",
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
   },
    buttoncontainer: {
        flex: 0.28,
    }, 
    render: {
        flex: 2,
        backgroundColor:'#eaece5',
        width: "96%",
        alignSelf: "center",
        borderColor:'#3b3a30',
        borderLeftWidth: 5,
        borderRightWidth: 5,
        borderBottomWidth: 5,
    },
    artistdata: {
        flex: 1,
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
        backgroundColor: "#b2c2bf",
        borderRadius: 5,
        marginTop: 10,
        width: 100
    },
    updatebutton: {
        backgroundColor: "#3b3a30",
        borderRadius: 5,
        marginTop: 20,
        marginLeft: 5,
        marginBottom: 10, 
    },
    welcomemessage: {
        fontSize: 22,
        color: '#3b3a30',
        paddingBottom: 25,
        paddingTop: 15,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        justifyContent: 'center',
        textAlign: 'center'
    },
    indicator: {
        flex: 1,
        justifyContent: "center"
    },
    TextInputArtist: {
        color: '#fff',
        backgroundColor: '#3b3a30',
        borderRadius: 10,
        margin: 5,
        marginTop: 0,
        textAlign: 'center',
        shadowColor: 'black',
        shadowOffset: {width: -1, height: 1},
        shadowRadius: 10,
        width: Dimensions.get("screen").width*0.8,
        height: 35,
        elevation: 3
      }, 
    ProfilePic: {
        width: 170,
        height: 170,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 200,
        resizeMode: 'cover',
        alignSelf: "center",
    },
    TextImage: {
        color: '#fff',
        textAlign: 'center',
        margin: 10, 
    },
    PicUploadArea: {
        color: 'black',
        backgroundColor: '#f8f8ff',
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
    button_wrap2: {
        flexDirection: 'row',
        marginTop: 0,
        marginBottom: 10,
        shadowColor: 'black',
        shadowOffset: {width: -1, height: 1},
        shadowRadius: 10,
        width: Dimensions.get("screen").width*0.5,
        elevation: 3
   },
   dadosWrap: {
       flex: 1,
       alignItems: "center"
   }
});

export default styles
