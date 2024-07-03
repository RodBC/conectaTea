import React from 'react';
import { Button as PaperButton, Text, useTheme } from 'react-native-paper';
import { View, Image } from 'react-native';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/native';

const HomeScreen = () => {
  const theme = useTheme();

  return (
    <View style={containerStyle(theme)}>
      <Image source={require('../assets/icone_app.png')} style={iconStyle} />
      <Text style={appNameStyle(theme)}>App Name</Text>
      <PaperButton mode="contained" onPress={() => console.log('Pressed')} color={theme.colors.logar}>
        Logar
      </PaperButton>
      <Text style={cadastreSeStyle(theme)}>Cadastre-se</Text>
    </View>
  );
};

const containerStyle = (theme) => css`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary};
`;
const iconStyle = css`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

const appNameStyle = (theme) => css`
  color: ${theme.colors.appName};
  font-size: 24px;
  margin-bottom: 20px;
`;

const cadastreSeStyle = (theme) => css`
  color: ${theme.colors.cadastreSe};
  margin-top: 20px;
  text-decoration: underline;
  text-decoration-color: ${theme.colors.underline};
`;

export default HomeScreen;
