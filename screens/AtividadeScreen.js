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

  const handleAtividadePress = (therapistName) => {
    navigation.navigate('AtividadeDetalhes', { therapistName });
  };
  const handleInicioPress = () => {
    console.log("touched home button")
    navigation.navigate('Home');
  };
  console.log(route.params.userTypePassing)
  // route.params.userType == 'Pais' ? <<< temos essa info, agora é usar pra
  // distringuir o que vai exibir, se vai mostrar as atividades ou os pacientes

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={[styles.header, { backgroundColor: theme.colors.primary }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.surface} />
        </TouchableOpacity>
        <Text style={[styles.headerText, { color: theme.colors.surface }]}>{therapistName}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
   
        {atividades.map((atividade, index) => (

          <TouchableOpacity key={index} onPress={() => handleAtividadePress(atividade.name)} style={styles.cardContainer}>
          
          <AtividadeCard key={index} title={atividade.title} rating={atividade.rating} image={atividade.image}/>
          
          </TouchableOpacity>
        
        ))}
      </ScrollView>
      <View style={[styles.footer, { backgroundColor: theme.colors.primary }]}>

        <TouchableOpacity onPress={() => handleInicioPress()} style={styles.footerItem}>
          <Ionicons name="home-outline" size={30} color={theme.colors.surface} />
          <Text style={[styles.footerText, { color: theme.colors.surface }]}>Principal</Text>

        </TouchableOpacity>
        
        
        <TouchableOpacity onPress={() => handleInicioPress()} style={styles.footerItem}>
          
          <Ionicons name="settings-outline" size={30} color={theme.colors.surface} />
          <Text style={[styles.footerText, { color: theme.colors.surface }]}>Configurações</Text>
        
        </TouchableOpacity>
        
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
    flexDirection: 'row',
    height: '15%',
  },
  headerText: {
    fontSize: 18,
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

export default AtividadeScreen;
