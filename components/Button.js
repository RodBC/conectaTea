/** @jsxImportSource @emotion/react */
import styled from '@emotion/native';

const Button = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.primary};
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  margin: 10px;
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.colors.surface};
  font-size: 16px;
`;

export default Button;
