import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Chapter from './components/Chapter/Chapter';
import Home from './components/Home/Home';
import Section from './components/Section/Section';
import SplashScreen from './components/SplashScreen/SplashScreen';
import SearchResults from './components/SearchResults/SearchResults';
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default app;
