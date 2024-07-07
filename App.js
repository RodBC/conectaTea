import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import HomeScreen from './screens/HomeScreen';
import { theme } from './styles/theme';

const App = () => {
  return (
    <EmotionThemeProvider theme={theme}>
        <HomeScreen />
    </EmotionThemeProvider>
  );
};

export default App;
