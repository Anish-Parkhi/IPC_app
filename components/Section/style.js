import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    sectionMainContainer:{
        borderWidth: 1,
        flex: 1,
    },
    sectionNameContainer: {
        color: 'black',
        fontSize: 28,
    },
    sectionNumberWrapper: {
        alignSelf: 'center',
        padding: 8
    },
    horizontalRuleContainer: {
        borderWidth: 0.8,
        color: 'black',
        width: '40%',
        alignSelf: 'center'
    },
    sectionTitleContainer: {
        color: 'black',
        fontSize: 20,
        alignSelf: 'center',
        padding : 20,
        paddingBottom: 5,

    },
    sectionDescriptionWrapper: {
        borderRadius: 10,
        backgroundColor: '#E5E5E5',
        width: '90%',
        alignSelf: 'center',
        padding: 10,
        marginTop: 20
    },
    sectionDescriptionContainer: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        letterSpacing: 0.8
    }
})

export default styles;