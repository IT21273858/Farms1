import { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, ListRenderItemInfo, FlatList, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import Lottie from 'lottie-react-native';

import {
  Container,
  EmptyArea,
  EmptyText,
  InputSearchArea,
  InputSearch,
  ButtonSearch,
  Icon,
  Title,
  Filter,
  Containers,
  Containers2,
  Filter2,
} from './styles';

import api from '../../services/api';
import ProductCard, { ProductProps } from '../../components/ProductCard';
import theme from '../../global/theme';
import React from 'react';


export default function Home() {

  const [search, setSearch] = useState('');
  const [products, setProducts] = useState<ProductProps[] | []>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    getAllProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products?.filter(product => search ? product.title.toString().toLowerCase().includes(search.toLocaleLowerCase()) : true);
  }, [search, products]);
/* -----------------------------------------------------------------------------------------------*/
                                 /* Get all available products in a FlatList component */
/* -----------------------------------------------------------------------------------------------*/

  const getAllProducts = async () => {
    try {
      const result = await api.get('/products');

      if (result.data) {
        setProducts(result.data);
      }
    }
    catch (error) {
      // console.log('ERROR: ', error);
    }
    finally {
      setLoadingProducts(false);
    }
  };

/* -----------------------------------------------------------------------------------------------*/
                                 /* Sort results in ‘desc’ order */
/* -----------------------------------------------------------------------------------------------*/

/* -----------------------------------------------------------------------------------------------*/
                                 /* Get limited results from (Limit Results API ) range 5  */
/* -----------------------------------------------------------------------------------------------*/

  const getSortProducts = async () => {
    try {
      const result = await api.get('/products?sort=desc&limit=5');

      if (result.data) {
        setProducts(result.data);
      }
    }
    catch (error) {
      // console.log('ERROR: ', error);
    }
    finally {
      setLoadingProducts(false);
    }
  };
  

  const renderItem = ({ item }: ListRenderItemInfo<ProductProps>) => <ProductCard {...item} />;

  return (
    <Container>
      <InputSearchArea>
        <InputSearch
          placeholder="Search for a product..."
          placeholderTextColor="black"
          value={search}
          onChangeText={text => setSearch(text)}
        />
        {
          search ?
            <ButtonSearch onPress={() => setSearch('')}>
              <Icon name="close" color='tomato'/>
            </ButtonSearch>
            :
            <ButtonSearch>
              <Icon name="search1" color='black'/>
            </ButtonSearch>
        }
      </InputSearchArea>
      <TouchableOpacity onPress={getAllProducts}><Containers>
          <Filter>Show All</Filter>
      </Containers></TouchableOpacity>
        
      <TouchableOpacity onPress={getSortProducts}><Containers2>
          <Filter2>Get Filtered and Sorted</Filter2>
        </Containers2></TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
  <View>
    <Text style={{width: 130, textAlign: 'center'}}><Title>Just For You</Title></Text>
  </View>
  <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
</View>
       
      {
        (filteredProducts?.length <= 0 && !loadingProducts) &&
        <EmptyArea>
          <Lottie
            source={require('../../assets/animations/search-empty.json')}
            autoPlay
            loop
            style={{ width: 250 }}
          />
          <EmptyText>No result found...</EmptyText>
        </EmptyArea>
      }

      {
        loadingProducts &&
        <ActivityIndicator color={theme.colors.green} size="large" />
      }

      {
        (filteredProducts?.length > 0 && !loadingProducts) &&


/* -----------------------------------------------------------------------------------------------*/
                                 /* List products in a FlatList component */
/* -----------------------------------------------------------------------------------------------*/

        <FlatList
        
         
          data={filteredProducts}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      }
    </Container>
  );
}
