import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        color: '#455a64',
        fontSize: 25,
        marginBottom: 5,
    },
    header: {
        fontWeight: 'bold',
        color: '#4b7199',
        fontSize: 40,
        marginBottom: 30
    },
    texBox: {
        width: 200,
        height: 50,
        borderColor: '#191970',
        borderWidth: 1,
        textAlign: 'right',
        paddingHorizontal: 15,
        borderRadius: 10,
        marginBottom: 25,
        fontSize: 20,
    },
    containerField: {
        flexDirection: 'row',
    },
    containerFieldIcon: {
        justifyContent: 'center',
    },
    areaBtn: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 20
    }
});

export default styles;