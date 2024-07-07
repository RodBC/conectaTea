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

  const handleLoginPress = () => {
    setLoginVisible(true);
    Animated.timing(animatedHeight, {
      toValue: height * 0.75,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: theme.colors.primary, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../assets/icone_app.png')} style={{ width: '20%', height: '20%' }} resizeMode="contain" />
        <Text style={{ color: theme.colors.appName, fontSize: 24, marginTop: '5%' }}>ConectaTEA</Text>
      </View>

      <Animated.View style={{ height: animatedHeight, backgroundColor: theme.colors.background }}>
        {!loginVisible ? (
          <>
            <Button onPress={handleLoginPress}>
              <ButtonText>Logar</ButtonText>
            </Button>
            <Button>
              <ButtonText>Cadastrar</ButtonText>
            </Button>
          </>
        ) : (
          <View style={{ padding: '10%' }}>
            <TextInputWithIcon iconName="mail-outline" placeholder="Email" />
            <TextInputWithIcon iconName="lock-closed-outline" placeholder="Senha" secureTextEntry />
            <Button>
              <ButtonText>Logar</ButtonText>
            </Button>
            <TouchableOpacity>
              <Text style={{ color: theme.colors.primary, marginTop: '5%' }}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: '10%' }}>
              <Text style={{ color: theme.colors.cadastreSe }}>Cadastrar-se</Text>
            </TouchableOpacity>
          </View>
        )}
      </Animated.View>
    </View>
  );
};

export default HomeScreen;
