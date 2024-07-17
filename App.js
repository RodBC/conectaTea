import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import ConsultaScreen from './screens/ConsultaScreen';
import AtividadeScreen from './screens/AtividadeScreen';
import AtividadeDetalhesScreen from './screens/AtividadeDetalhesScreen';
import { theme } from './styles/theme';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <EmotionThemeProvider theme={theme}>
        <PaperProvider theme={theme}>
          <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Consulta" component={ConsultaScreen} />
            <Stack.Screen name="AtividadeScreen" component={AtividadeScreen} />
            <Stack.Screen name="AtividadeDetalhes" component={AtividadeDetalhesScreen} />
          </Stack.Navigator>
        </PaperProvider>
      </EmotionThemeProvider>
    </NavigationContainer>
  );
};

export default App;




