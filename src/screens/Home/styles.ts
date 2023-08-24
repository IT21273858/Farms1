import styled from 'styled-components/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.lightgreen};
  padding: 5%;
`;

export const EmptyArea = styled.View`
  width: 100%;
  align-items: center;
  margin: 30px 0;
`;

export const EmptyText = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.colors.black};
  margin-top: 30px;
`;

export const InputSearchArea = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.colors.grayLight};
  border-radius: 7px;
  padding: 0 4%;
  margin-bottom: 30px;
`;

export const InputSearch = styled.TextInput`
  flex-grow: 1;
  font-size: 16px;
  color: ${props => props.theme.colors.black};
  height: 50px;
  width: 90%;
`;

export const ButtonSearch = styled.TouchableOpacity``;

export const Icon = styled(AntDesign)`
  font-size: 24px;

`;

export const Title = styled.Text`
  fontFamily:'sans-serif-thin';
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors.black};
  margin-bottom: 20px;
`;
export const Filter = styled.Text`
  position:absolute;
  margin-left:1px;
  fontFamily:'Roboto';
  font-size: 18px;
  font-weight: 400;
  color: ${props => props.theme.colors.black};
  margin-top:5px;
  
`;
export const Filter2 = styled.Text`
  position:absolute;
  margin-left:5px;
  fontFamily:'Roboto';
  font-size: 18px;
  font-weight: 400;
  color: ${props => props.theme.colors.black};
  margin-top:5px;
  
`;
export const Containers = styled.View`
  margin-top:5px;
  
  border-radius:10px;
  border-color:"red";
  height:10px
  width:100px;
  background: ${props => props.theme.colors.test6};
  padding: 4%;
`;
export const Containers2 = styled.View`
  margin-top:-30px;
  margin-bottom:10px;
  border-radius:10px;
  margin-left:170px;
  border-color:"red";
  height:10px
  width:220px;
  background: ${props => props.theme.colors.test6};
  padding: 4%;
`;
