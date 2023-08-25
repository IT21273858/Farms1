import { useEffect, useState } from 'react';
import { ListRenderItemInfo, FlatList } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import Lottie from 'lottie-react-native';

import ProductCard, { ProductProps } from '../../components/ProductCard';

import {
  Container,
  EmptyArea,
  EmptyText,
  Title,
} from './styles';

import { getFavorites } from '../../utils/storage';
      // Defining the 'Favorites' component
export default function Favorites() {
      // Hook to check if the screen is focused
  const isFocused = useIsFocused();
      // State to store the user's favorite products
  const [favorites, setFavorites] = useState<ProductProps[] | []>([]);

  useEffect(() => {
    // Variable tracks is the component is still active
    let isActive = true;
    // Fetch favorite products from api
    async function getMyFavorites() {
      const products = await getFavorites('@appfakestore');
      setFavorites(products); // Updates the favorites state only if the component is still active
    }
    // Fetch favorites only when the component is mounted and focused
    if (isActive) {
      getMyFavorites();
    }
    // sets 'isActive' to false when the component is unmounted
    return () => {
      isActive = false;
    };

  }, [isFocused]);
  // Render each individual item in the FlatList
  const renderItem = ({ item }: ListRenderItemInfo<ProductProps>) => <ProductCard {...item} />;

  return (
    <Container>

      <Title>My Favorites</Title>

      {
        favorites.length === 0 ?
          <EmptyArea>
            <Lottie
              source={require('../../assets/animations/empty-fav.json')}
              autoPlay
              loop
              style={{ width: 250 }}
            />
            <EmptyText>You have no favorites...</EmptyText>
          </EmptyArea>
          :
          <FlatList
            data={favorites}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            numColumns={2}
            showsVerticalScrollIndicator={false}
          />
      }

    </Container>
  );
}
