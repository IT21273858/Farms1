import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import {Text, StyleSheet} from 'react-native';
import CartProvider from './src/contexts/CartContext';
import theme from './src/global/theme';
import Routes from './src/routes';
import styled from 'styled-components/native';
import LoginScreen from './src/screens/Login';
export default function App() {
  const styles = StyleSheet.create({
  
    titleText: {
      
      textAlign:'center',
      fontSize: 55,
      paddingTop:1,
      paddingBottom:1,
      
      fontFamily: "serif",
      backgroundColor: '#c25db9',
      borderRadius:2,
      
      
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Text style={styles.titleText} >Farms</Text>
        
        <CartProvider>
          <StatusBar backgroundColor={theme.colors.purple} barStyle="light-content" animated />
          
          <Routes />
        </CartProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
  
}
