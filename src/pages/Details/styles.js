import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEAE63',
    },

    c1: {
        flex: 1,
        marginLeft: 25,
        marginTop: 30,
    },

    c2: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },

    boxDetails: {
        flexDirection: 'column',
        elevation: 6,
        width: 318,
        height: 220,
        left: 21,
        top: 15,
        borderRadius: 15,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "grey",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        backgroundColor: '#fff'
    },

    name: {
        fontSize: 22,
    },

    description: {
        fontSize: 20,
        color: '#3E3E3E',
        marginTop: 2,
    },

    temperature: {
        marginLeft: 45,
        fontSize: 40,
        color: '#212121',
        marginBottom: 30,
    },

    subDetails: {
        marginRight: 30,
        marginBottom: 30,
    },

    subDetailsText: {
        fontSize: 18,
        color: '#3E3E3E',
    }

})