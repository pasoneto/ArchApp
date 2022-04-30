import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    page: {
        width: '100%',
        height: Dimensions.get('screen').height
    },
    title: {
        fontSize: Dimensions.get('window').width*0.10,
        fontWeight: 'bold',
        color: "white",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 2,
        alignSelf: 'center',
        marginTop: "20%"
    },
    titles: {
        marginTop: '0%',
        width: Dimensions.get('window').width,
        alignItems: 'center',
    },
    subtitle: {
        fontSize: 20,
        color: 'white',
        justifyContent: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 2,
    },
    container: {
        flex: 1,
        position: 'absolute',
        height: "75%",
        width: "80%",
        marginTop: "10%",
        margin: "10%",
        // marginLeft: "10%",
        // marginRight: "10%"
      },
    container2: {
        flex: 1,
        position: 'absolute',
        height: "75%",
        width: "100%",
        marginTop: "35%",
      },
    image: {
        width: '100%', // Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        resizeMode: 'cover',
        position: 'absolute',
        flexWrap: 'wrap',
    },
});

export default styles