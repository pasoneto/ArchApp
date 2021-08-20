import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        // padding: 5,
    },
    button: {
        opacity: 0.95,
        justifyContent: 'center',
        alignItems: 'center',
        top: '50%',
        height: 40,
        borderRadius: 20,
        margin: 5,
    },
    text: {
        fontSize: 15,
        alignSelf: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    button_data: {
        backgroundColor: "pink",
        padding: 18,
        width: '46%',
        height: 60,
        borderWidth: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: "100%"
  },
});

export default styles;