import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import HomeScreen from './screens/HomeScreen';
import { theme } from './styles/theme';

const App = () => {
  return (
      <PaperProvider theme={theme}>
        <HomeScreen />
      </PaperProvider>
  );
};

export default App;
