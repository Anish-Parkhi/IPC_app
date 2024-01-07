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
    borderColor: '#ACACAC'
  },
  textInputStyle: {
    fontSize: 16,
  },
});

export default styles;
