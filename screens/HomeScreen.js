import React, { useState } from 'react';
import { View, Text, Image, Animated, TouchableOpacity, Dimensions } from 'react-native';
import { useTheme } from '@emotion/react';
import Button, { ButtonText } from '../components/Button';
import TextInputWithIcon from '../components/TextInputWithIcon';

const { height } = Dimensions.get('window');

const HomeScreen = () => {
  const theme = useTheme();
  const [animatedHeight] = useState(new Animated.Value(height * 0.5));
  const [loginVisible, setLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);

  const handleLoginPress = () => {
    setLoginVisible(true);
    setRegisterVisible(false);
    Animated.timing(animatedHeight, {
      toValue: height * 0.75,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const handleRegisterPress = () => {
    setRegisterVisible(true);
    setLoginVisible(false);
    Animated.timing(animatedHeight, {
      toValue: height * 0.75,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const handleBackPress = () => {
    setLoginVisible(false);
    setRegisterVisible(false);
    Animated.timing(animatedHeight, {
      toValue: height * 0.5,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: theme.colors.primary, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('../assets/icone_app.png')} style={{ width: 40, height: 40 }} resizeMode="contain" />
          <Text style={{ color: theme.colors.appName, fontSize: 24, marginLeft: 10 }}>ConectaTEA</Text>
        </View>
      </View>

      <Animated.View style={{ height: animatedHeight, backgroundColor: theme.colors.background }}>
        {!loginVisible && !registerVisible ? (
          <>
            <Button onPress={handleLoginPress}>
              <ButtonText>Logar</ButtonText>
            </Button>
            <Button onPress={handleRegisterPress}>
              <ButtonText>Cadastrar</ButtonText>
            </Button>
          </>
        ) : loginVisible ? (
          <View style={{ padding: '10%' }}>
            <TextInputWithIcon iconName="mail-outline" placeholder="Email" />
            <TextInputWithIcon iconName="lock-closed-outline" placeholder="Senha" secureTextEntry />
            <Button>
              <ButtonText>Logar</ButtonText>
            </Button>
            <TouchableOpacity onPress={handleRegisterPress}>
              <Text style={{ color: theme.colors.primary, marginTop: '5%' }}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRegisterPress} style={{ marginTop: '10%' }}>
              <Text style={{ color: theme.colors.cadastreSe }}>Cadastrar-se</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ padding: '10%' }}>
            <TextInputWithIcon iconName="person-outline" placeholder="Nome Completo" />
            <TextInputWithIcon iconName="mail-outline" placeholder="Email" />
            <TextInputWithIcon iconName="lock-closed-outline" placeholder="Senha" secureTextEntry />
            <TextInputWithIcon iconName="lock-closed-outline" placeholder="Confirmar Senha" secureTextEntry />
            <Button>
              <ButtonText>Cadastrar</ButtonText>
            </Button>
            <TouchableOpacity onPress={handleBackPress}>
              <Text style={{ color: theme.colors.primary, marginTop: '5%' }}>Voltar</Text>
            </TouchableOpacity>
          </View>
        )}
      </Animated.View>
    </View>
  );
};

export default HomeScreen;
