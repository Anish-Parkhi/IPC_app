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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 8,
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
    objectFit: 'contain',
    marginTop: 15
  },
  logoHeader: {
    fontSize: 20,
    margin: 8,
    color: 'black',
    marginBottom: 12,
    fontWeight: '600'
  }
});

export default styles;
