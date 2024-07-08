import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';
import ConsultaCard from '../components/ConsultaCard';

const ConsultaScreen = ({ route }) => {
  const { userEmail } = route.params;
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.header, { backgroundColor: theme.colors.primary }]}>
        <Text style={[styles.headerText, { color: theme.colors.surface }]}>{"userEmail"}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        <ConsultaCard title="Terapeuta" name="Nome da Terapeuta" image={require('../assets/terapeuta.png')} />
        <ConsultaCard title="Psicólogo" name="Nome do Psicólogo" image={require('../assets/psicologo.png')} />
        <ConsultaCard title="Fonoaudiólogo" name="Nome do Profissional" image={require('../assets/fonoaudiologo.png')} />
      </ScrollView>
      <View style={[styles.footer, { backgroundColor: theme.colors.primary }]}>
        <View style={styles.footerItem}>
          <Ionicons name="home-outline" size={30} color={theme.colors.surface} />
          <Text style={[styles.footerText, { color: theme.colors.surface }]}>Principal</Text>
        </View>
        <View style={styles.footerItem}>
          <Ionicons name="settings-outline" size={30} color={theme.colors.surface} />
          <Text style={[styles.footerText, { color: theme.colors.surface }]}>Configurações</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '15%',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardsContainer: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'space-around',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '15%',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
  },
});

export default ConsultaScreen;
