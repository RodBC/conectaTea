import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import HomeScreen from './screens/HomeScreen';
import { theme } from './styles/theme';

const App = () => {
  return (
    <EmotionThemeProvider theme={theme}>
      <PaperProvider theme={theme}>
        <HomeScreen />
      </PaperProvider>
    </EmotionThemeProvider>
  );
};

export default App;
