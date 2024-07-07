import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import { theme } from './styles/theme';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <EmotionThemeProvider theme={theme}>
          <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
      </EmotionThemeProvider>
    </NavigationContainer>
  );
};

export default App;
