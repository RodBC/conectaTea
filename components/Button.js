/** @jsxImportSource @emotion/react */
import styled from '@emotion/native';

const Button = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.primary};
  padding: 10px;
  border-radius: 5px;
  align-items: center;
`;

export default Button;