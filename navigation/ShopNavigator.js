import { View, Text, Button } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import MenuScreen from '../screens/shop/MenuScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import AuthScreen from '../screens/user/AuthScreen';
import StartupScreen from '../screens/StartupScreen';


import MyHeaderButton from '../components/UI/MyHeaderButton';
import HomeButton from '../components/UI/HomeButton';

import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';


// const ProductsNavigator = createStackNavigator(
//   {
//     ProductsOverview: ProductsOverviewScreen
//   },
//   {
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
//       },
//       headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
//     }
//   }
// );


const Stack = createNativeStackNavigator();

const ProductsNavigator = ({route, navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="StartupScreen" component={StartupScreen} />
        <Stack.Screen name="Shop" component={ProductsOverviewScreen}
        options={({navigation, route}) => ({
          title: "All Products",
          headerRight: () => (
            <View>
            <Button
            onPress={() => navigation.navigate('MenuScreen')}
            title="menu"
          />
          </View>
          ),
        })}
        />
        <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={({navigation, route}) => ({
          title: route.params.productTitle,
          headerRight: () => (
            <MyHeaderButton
             onCartPressed= {
               () => navigation.navigate('CartScreen')
             }
             />
          ),
        })}
        />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
        <Stack.Screen
        name="User"
        component={UserProductsScreen}
        options={({navigation, route}) => ({
          headerTitle: "My Products",
          headerRight: () => (
            <Button
              onPress={ () =>
                  navigation.navigate('Edit Product', { headerTitle: 'Add Product' })
               }
              title="Add"
            />
          ),
        })}

         />
        <Stack.Screen name="Edit Product"
        component={EditProductScreen}
        options={({navigation, route}) => ({
          headerTitle: route.params.headerTitle,

        })}
        />

        <Stack.Screen name="Orders"
        component={OrdersScreen}
        />
        <Stack.Screen name="Auth"
        component={AuthScreen}
        options={() => ({
          headerTitle: "Authenticate",

        })}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
  // const OrdersNavigator = createNativeStackNavigator({
  //   Orders: OrdersScreen
  // }, )

  // const Drawer = createDrawerNavigator();

  // const ProductsNavigatorrrr = () => {
  //   return (
  //  <NavigationContainer>
  //    <Drawer.Navigator>
  //      <Drawer.Screen name="All Productsss" component={ProductsOverviewScreen} />
  //      <Drawer.Screen
  //      name="ProductDetail"
  //      component={ProductDetailScreen}
  //      options={({navigation, route}) => ({
  //        title: route.params.productTitle,
  //        headerRight: () => (
  //          <MyHeaderButton
  //           onCartPressed= {
  //             () => navigation.navigate('CartScreen')
  //           }
  //           />
  //        ),
  //      })}
  //      />
  //      <Drawer.Screen name="CartScreen" component={CartScreen} />
  //
  //    </Drawer.Navigator>
  //  </NavigationContainer>
  //  );
  // }

export default ProductsNavigator;
