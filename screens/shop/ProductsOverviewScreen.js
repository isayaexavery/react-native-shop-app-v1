import React, { useEffect } from 'react';
import { FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import * as productActions from '../../store/actions/products';
import Colors from '../../constants/Colors';

const ProductsOverviewScreen = ({navigation}) => {
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions.fetchProducts());
  }, [dispatch]);

  const selectItemHandler = (id, title) => {
   navigation.navigate('ProductDetail', {
     productId: id,
     productTitle: title
   });
 };

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onSelect={() => {
             selectItemHandler(itemData.item.id, itemData.item.title);
           }}

        >
        <Button
          color={Colors.primary}
          title="View Details"
          onPress={() => {
              selectItemHandler(itemData.item.id, itemData.item.title);
            }}
        />
        <Button
          color={Colors.primary}
          title="To Cart"
          onPress={() => {
              dispatch(cartActions.addToCart(itemData.item));
            }}
        />
        </ProductItem>
      )}
    />
  );
};

// ProductsOverviewScreen.navigationOptions = {
//   headerTitle: 'All Products'
// };

export default ProductsOverviewScreen;
