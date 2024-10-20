import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  sectionNameContainer: {
    borderWidth: 0.4,
    padding: 10,
    backgroundColor: '#EDEDED',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 1.4,
  },
  chapterMainContainer: {
    padding: 10,
    width: '100%',
    flex: 1,
  },
  chapterNameContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 9,
  },
  horizontalRuleContainer: {
    borderWidth: 0.5,
    padding: 0,
    marginBottom: 10,
    width: '40%',
    alignSelf: 'center',
  },
});

export default styles;
