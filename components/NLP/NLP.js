import React, {useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {postApi} from '../../utils/baseApi/nlpApi';

const NLP = () => {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const navigation = useNavigation();

  const handleSearch = async () => {
    if (!searchText.trim()) {
      Alert.alert('Please enter a search term');
      return;
    }
    setLoading(true);
    try {
      // Await the response from postApi
      const response = await postApi('categorize', {text: searchText});

      // Check if the response is defined and has a status of 200
      if (response && response.status === 200) {
        setArticles(response.data);
      } else {
        Alert.alert(
          'Error',
          'Error fetching data: ' +
            (response ? response.status : 'Unknown error'),
        );
      }
    } catch (error) {
      console.error('Error fetching data', error);
      Alert.alert('Error', 'An unexpected error occurred.'); // Alert for unexpected errors
    } finally {
      setLoading(false);
    }
  };

  const renderArticle = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.articleCard}
        onPress={() => navigation.navigate('ArticleWebView', {url: item.url})}>
        <Text style={styles.articleTitle}>{item.title}</Text>
        <Text style={styles.articleDescription}>{item.description}</Text>
        <Text style={styles.articleCategory}>
          Categories: {item.category.join(', ')}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter crime term"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Icon name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#007BFF" />
      ) : (
        <FlatList
          data={articles.articles}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderArticle}
          contentContainerStyle={styles.articleList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 16,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  searchButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    paddingHorizontal: 16,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  articleList: {
    paddingTop: 10,
  },
  articleCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  articleDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  articleCategory: {
    fontSize: 12,
    color: '#007BFF',
    fontWeight: 'bold',
  },
});

export default NLP;
