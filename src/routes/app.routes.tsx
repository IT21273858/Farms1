import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import theme from '../global/theme';

import Home from '../screens/Home';
import Product from '../screens/Product';
import Favorites from '../screens/Favorites';
import Cart from '../screens/Cart';
import Login from '../screens/Login';

import { ProductProps } from '../components/ProductCard';
import CartTabIcon from '../components/CartTabIcon';

export type AppStackParamList = {
  Home: undefined;
  Product: ProductProps;
  Favorites: undefined;
  Cart: undefined;
  Login: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<AppStackParamList>();

function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Favorites" component={Favorites} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: theme.colors.green,
          tabBarStyle: {
            backgroundColor: theme.colors.white,
            borderTopWidth: 0,
          },
        }}
      >
       <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Icon name="login" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Home"
          component={StackRoutes}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Icon name="home" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              return <Icon name={focused ? 'heart' : 'hearto'} color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <CartTabIcon color={color} size={size} />;
            },
          }}
        />
      </Tab.Navigator>
    
  );
}
