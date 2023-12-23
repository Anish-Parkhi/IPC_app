import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardMainContainer: {
    backgroundColor: '#F6F6F6',
    width: '45%',
    height: 200,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // marginVertical: 10,
    borderWidth: 0.4,
    shadowColor: '#CFCFCF',
    borderColor: '#CFCFCF',
  },
  cardChapterContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chapterTitleText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default styles;
