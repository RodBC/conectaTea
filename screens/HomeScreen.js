import React from 'react';
import { Button as PaperButton, Text } from 'react-native-paper';
import { View } from 'react-native';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>App Name</Text>
      <PaperButton mode="contained" onPress={() => console.log('Pressed')}>Logar</PaperButton>
      <Text style={styles.cadastreSe}>Cadastre-se</Text>
    </View>
  );
};

const styles = {
  container: css`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.background};
  `,
  appName: css`
    color: ${props => props.theme.colors.appName};
    font-size: 24px;
    margin-bottom: 20px;
  `,
  cadastreSe: css`
    color: ${props => props.theme.colors.cadastreSe};
    margin-top: 20px;
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.colors.underline};
  `,
};

export default HomeScreen;
