import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bigCardMainContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#D7D7D7',
    padding: 15,
    backgroundColor: '#EEEEEE',
    width: '90%',
    margin: 10,
  },
  chapterName: {
    fontSize: 20,
    color: 'black',
  },
  chapterNameContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionName: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  chapterTitle: {
    color: 'black',
    fontSize: 19,
    fontWeight: '600',
  },
  sectionTitleContainer: {
    marginBottom: 10,
  },
  sectionTitle: {
    color: 'black',
    fontSize: 16,
  },
  buttonContainer: {
    width: '40%',
    alignSelf: 'flex-end',
  },
  
});

export default styles;
