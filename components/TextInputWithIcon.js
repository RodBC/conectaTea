import React from 'react';
import { View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/native';

const TextInputWithIcon = ({ iconName, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <Ionicons name={iconName} size={20} color="#6F6F6F" style={styles.icon} />
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        placeholderTextColor="#6F6F6F"
      />
    </View>
  );
};

const styles = {
  container: css`
    flex-direction: row;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-color: #6F6F6F;
    margin-bottom: 20px;
  `,
  icon: css`
    padding: 10px;
  `,
  input: css`
    flex: 1;
    padding: 10px;
    font-size: 16px;
    color: #000000;
  `,
};

export default TextInputWithIcon;
