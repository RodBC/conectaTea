import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';
import ConsultaCard from '../components/ConsultaCard';

const mockConsultas = [
  {
    title: "Terapeuta",
    name: "Nome da Terapeuta",
    image: require('../assets/terapeuta.png')
  },
  {
    title: "Psicólogo",
    name: "Nome do Psicólogo",
    image: require('../assets/psicologo.png')
  },
  {
    title: "Fonoaudiólogo",
    name: "Nome do Profissional",
    image: require('../assets/fonoaudiologo.png')
  }
];

const ConsultaScreen = ({ route, navigation }) => {
  const { userEmail } = route.params;
  const theme = useTheme();
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    setConsultas(mockConsultas);
  }, []);

  const handleCardPress = (therapistName) => {
    navigation.navigate('Atividade', { therapistName });
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.header, { backgroundColor: theme.colors.primary }]}>
        <Text style={[styles.headerText, { color: theme.colors.surface }]}>{"userEmail"}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {consultas.map((consulta, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCardPress(consulta.name)}
            style={styles.cardContainer}
          >
            <ConsultaCard title={consulta.title} name={consulta.name} image={consulta.image} />
          </TouchableOpacity>
        ))}
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
  scrollViewContent: {
    flexGrow: 1,
    padding: '5%',
  },
  cardContainer: {
    height: '30%',
    marginBottom: '5%', 
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '10%',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
  },
});

export default ConsultaScreen;