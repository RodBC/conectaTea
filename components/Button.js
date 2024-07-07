/** @jsxImportSource @emotion/react */
import styled from '@emotion/native';

const Button = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.primary};
  padding: 3% 0;
  border-radius: 5px;
  align-items: center;
  margin: 3% 0;
  width: 80%;
  align-self: center;
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.colors.surface};
  font-size: 16px;
`;

export default Button;
