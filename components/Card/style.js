import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardMainContainer: {
    backgroundColor: '#F6F6F6',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.4,
    shadowColor: '#CFCFCF',
    borderColor: '#CFCFCF',
    padding: 0,
    gap: 4
  },
  cardChapterContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    width: '100%'
    // position: 'absolute',
    // top: 10,
    // zIndex: 1,
    // left: '32%',
    // marginBottom: 5
  },
  chapterTitleText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  chapterNumberText: {
    fontSize: 17,
    color: 'black',
    padding: 1,
  },
  chapterNameContainer: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  chapterName: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  cardImageContainer: {
    display: 'flex',
    // flex :1,
    justifyContent: 'center',
    alignContent: 'center',
    width: '30%',
    height: '30%',
    borderRadius: 200 / 2,
    borderWidth: 0.4,
    flexBasis: '30%',
    marginTop: 9
  },
  cardImageMain: {
    width: '100%',
    height: '100%',
    borderRadius: 200 / 2,
  },
  touchableComponentContainer: {
    width: '48%',
  },
});

export default styles;
