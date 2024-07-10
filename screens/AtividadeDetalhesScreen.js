import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const AtividadeDetalhes = () => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Descrição da atividade</Text>
        <TextInput style={[styles.input, { borderColor: theme.colors.primary }]} multiline />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Materiais adicionais</Text>
        <TextInput style={[styles.input, { borderColor: theme.colors.primary }]} multiline />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Como a criança se sentiu?</Text>
        <TextInput style={[styles.input, { borderColor: theme.colors.primary }]} multiline />
      </View>
      <TouchableOpacity style={styles.videoButton}>
        <Ionicons name="videocam-outline" size={20} color={theme.colors.text} />
        <Text style={styles.videoButtonText}>Anexe o vídeo da atividade</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.sendButton, { backgroundColor: theme.colors.primary }]}>
        <Text style={styles.sendButtonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

const Videos = () => (
  <View style={styles.container}>
    <Text>Videos Section</Text>
  </View>
);

const Comentarios = () => (
  <View style={styles.container}>
    <Text>Comentarios Section</Text>
  </View>
);

const AtividadeDetalhesScreen = ({ route, navigation }) => {
  const { atividadeTitle } = route.params;
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.header, { backgroundColor: theme.colors.primary }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.surface} />
        </TouchableOpacity>
        <Text style={[styles.headerText, { color: theme.colors.surface }]}>{atividadeTitle}</Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: theme.colors.primary,
          tabBarIndicatorStyle: { backgroundColor: theme.colors.primary },
        }}
      >
        <Tab.Screen name="Atividade" component={AtividadeDetalhes} />
        <Tab.Screen name="Videos" component={Videos} />
        <Tab.Screen name="Comentários" component={Comentarios} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    height: '10%',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: '5%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: '1%',
  },
  input: {
    height: '15%',
    borderWidth: 1,
    borderRadius: 10,
    padding: '2%',
    textAlignVertical: 'top',
  },
  videoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3%',
    backgroundColor: '#D3D3D3',
    borderRadius: 10,
    marginBottom: '5%',
  },
  videoButtonText: {
    marginLeft: '2%',
    fontSize: 16,
  },
  sendButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3%',
    borderRadius: 10,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AtividadeDetalhesScreen;
