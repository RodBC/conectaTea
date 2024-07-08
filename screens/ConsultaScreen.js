import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ConsultaCard from '../components/ConsultaCard';

const ConsultaScreen = ({ route }) => {
  const { userName } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{userName}</Text>
      </View>
      <View style={styles.cardsContainer}>
        <ConsultaCard title="Terapeuta" name="Nome da Terapeuta" image={require('../assets/terapeuta.png')} />
        <ConsultaCard title="Psicólogo" name="Nome do Psicólogo" image={require('../assets/psicologo.png')} />
        <ConsultaCard title="Fonoaudiólogo" name="Nome do Profissional" image={require('../assets/fonoaudiologo.png')} />
      </View>
      <View style={styles.footer}>
        <Ionicons name="home-outline" size={30} color="#277BC0" />
        <Text style={styles.footerText}>Principal</Text>
        <Ionicons name="settings-outline" size={30} color="#277BC0" />
        <Text style={styles.footerText}>Configurações</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3F3',
  },
  header: {
    backgroundColor: '#277BC0',
    padding: 20,
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardsContainer: {
    flex: 1,
    padding: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#DDD',
    backgroundColor: '#FFF',
  },
  footerText: {
    fontSize: 12,
    color: '#277BC0',
  },
});

export default ConsultaScreen;
