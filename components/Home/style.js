/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  homeMainContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  homeSubContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // searchBar styles
  searchBarContainer: {
    borderWidth: 1,
    width: '90%',
    borderRadius: 8,
    padding: 2,
    marginBottom: 10,
    borderColor: '#ACACAC',
  },
  textInputStyle: {
    fontSize: 16,
  },
  searchBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '90%',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 6,
  },
  textInputStyle: {
    width: '85%',
  },
  clearButtonContainer: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  searchButtonContaier: {
    width: '15%',
    height: '100%',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  searchIconContainer: {
    width: 20,
    height: 20,
    zIndex: 1,
    objectFit: 'contain'
  },
});

export default styles;
