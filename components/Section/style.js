import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  sectionMainContainer: {
    flex: 1,
  },
  sectionNameContainer: {
    color: 'black',
    fontSize: 28,
  },
  sectionNumberWrapper: {
    alignSelf: 'center',
    padding: 8,
  },
  horizontalRuleContainer: {
    borderWidth: 0.8,
    color: 'black',
    width: '40%',
    alignSelf: 'center',
    backgroundColor: 'black'
  },
  sectionTitleContainer: {
    color: 'black',
    fontSize: 20,
    alignSelf: 'center',
    padding: 20,
    paddingBottom: 5,
    textAlign: 'center',
  },
  sectionDescriptionWrapper: {
    borderRadius: 10,
    backgroundColor: '#E5E5E5',
    width: '90%',
    alignSelf: 'center',
    padding: 10,
    marginTop: 10,
    // marginBottom: 10
  },
  sectionDescriptionContainer: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: 0.4,
    marginBottom: 8
  },
  sectionDescriptionSubContainer: {
    alignSelf: 'center',
    textAlign: 'center',
    color: 'black',
    fontSize: 19,
    marginTop: 20,
  },
  horizontalRuleContainerDesc: {
    borderWidth: 0.8,
    color: 'black',
    width: '30%',
    alignSelf: 'center',
    marginTop: 5,
    backgroundColor: 'black'
  },
  buttonContainerMain: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20
  },
  
});

export default styles;
