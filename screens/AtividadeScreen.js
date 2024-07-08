import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@emotion/react';
import AtividadeCard from '../components/AtividadeCard';

const mockAtividades = [
  {
    title: "Atividade 1",
    rating: 3,
    image: require('../assets/atividade1.png')
  },
  {
    title: "Atividade 2",
    rating: 1,
    image: require('../assets/atividade2.png')
  },
  {
    title: "Atividade 3",
    rating: 2,
    image: require('../assets/atividade3.png')
  }
];

const AtividadeScreen = ({ route, navigation }) => {
  const { therapistName } = route.params;
  const theme = useTheme();
  const [atividades, setAtividades] = useState([]);

  useEffect(() => {
    setAtividades(mockAtividades);
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.header, { backgroundColor: theme.colors.primary }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.surface} />
        </TouchableOpacity>
        <Text style={[styles.headerText, { color: theme.colors.surface }]}>{therapistName}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        {atividades.map((atividade, index) => (
          <AtividadeCard
            key={index}
            title={atividade.title}
            rating={atividade.rating}
            image={atividade.image}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    height: '15%',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardsContainer: {
    flexGrow: 1,
    padding: '5%',
    justifyContent: 'space-around',
  },
});

export default AtividadeScreen;
