import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ArticleWebView from './components/ArticleWebview/ArticleWebView';
import Chapter from './components/Chapter/Chapter';
import Home from './components/Home/Home';
import NLP from './components/NLP/NLP';
import SearchResults from './components/SearchResults/SearchResults';
import Section from './components/Section/Section';
import SplashScreen from './components/SplashScreen/SplashScreen';
const Stack = createStackNavigator();
function app() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="section" component={Section} />
        <Stack.Screen name="chapter" component={Chapter} />
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="search" component={SearchResults} />
        <Stack.Screen name="NLP" component={NLP} />
        <Stack.Screen
          options={{title: 'IPC Insights'}}
          name="ArticleWebView"
          component={ArticleWebView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default app;
